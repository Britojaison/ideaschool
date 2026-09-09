import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public', 'images');
const APP_DIR = path.resolve('app');
const FILES_TO_SCAN = ['.tsx', '.ts', '.css'];

// Supported original extensions
const ORIGINAL_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.JPG'];

// Map of relative path without extension -> original extension
// e.g. "alumni-posters/MM Women's Day.mp4" -> ".png"
const originalExtensionsMap = new Map();

function buildOriginalExtensionsMap(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      buildOriginalExtensionsMap(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (ORIGINAL_EXTENSIONS.includes(ext)) {
        // Get relative path within public/images/
        const relativePath = path.relative(IMAGES_DIR, fullPath);
        // Normalize slashes to forward slashes for cross-platform robustness
        const normalizedPath = relativePath.replace(/\\/g, '/');
        const baseWithoutExt = normalizedPath.slice(0, -ext.length);
        
        originalExtensionsMap.set(baseWithoutExt, ext);
      }
    }
  }
}

function revertContent(content) {
  // Regex to find .webp references in quotes or CSS url()
  const WEBP_REGEX = /(["'`])([^"'`\n]*?)\.webp(["'`])/g;
  const CSS_WEBP_REGEX = /url\(['"]?([^'"\)\n]+?)\.webp['"]?\)/g;

  let reverted = content;

  // Helper to resolve the correct extension from path
  const getOriginalPath = (filePath) => {
    // Clean leading slash if present to match relative map key
    let cleanPath = filePath;
    let hasLeadingSlash = false;
    if (filePath.startsWith('/')) {
      cleanPath = filePath.slice(1);
      hasLeadingSlash = true;
    }
    
    // Remove "images/" prefix if present
    if (cleanPath.startsWith('images/')) {
      cleanPath = cleanPath.slice(7);
    }

    // Decode URL encoding (e.g. %20 -> space)
    const decodedPath = decodeURIComponent(cleanPath);

    if (originalExtensionsMap.has(decodedPath)) {
      const originalExt = originalExtensionsMap.get(decodedPath);
      return filePath + ' -> converted back to ' + originalExt; // debug info
    }
    return null;
  };

  // Revert quotes
  reverted = reverted.replace(WEBP_REGEX, (match, quoteOpen, filePath, quoteClose) => {
    let cleanPath = filePath;
    if (cleanPath.startsWith('/images/')) {
      cleanPath = cleanPath.slice(8);
    } else if (cleanPath.startsWith('images/')) {
      cleanPath = cleanPath.slice(7);
    }
    const decodedPath = decodeURIComponent(cleanPath);
    
    if (originalExtensionsMap.has(decodedPath)) {
      const ext = originalExtensionsMap.get(decodedPath);
      return `${quoteOpen}${filePath}${ext}${quoteClose}`;
    }
    return match;
  });

  // Revert CSS url()
  reverted = reverted.replace(CSS_WEBP_REGEX, (match, filePath) => {
    let cleanPath = filePath;
    if (cleanPath.startsWith('/images/')) {
      cleanPath = cleanPath.slice(8);
    } else if (cleanPath.startsWith('images/')) {
      cleanPath = cleanPath.slice(7);
    }
    const decodedPath = decodeURIComponent(cleanPath);

    if (originalExtensionsMap.has(decodedPath)) {
      const ext = originalExtensionsMap.get(decodedPath);
      return `url("${filePath}${ext}")`;
    }
    return match;
  });

  return reverted;
}

async function revertDirectory(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await revertDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      
      if (FILES_TO_SCAN.includes(ext)) {
        try {
          const content = await fs.promises.readFile(fullPath, 'utf8');
          const revertedContent = revertContent(content);

          if (content !== revertedContent) {
            await fs.promises.writeFile(fullPath, revertedContent, 'utf8');
            console.log(`Reverted references in: ${path.relative(APP_DIR, fullPath)}`);
          }
        } catch (error) {
          console.error(`  [ERROR] Failed to process ${entry.name}:`, error.message);
        }
      }
    }
  }
}

async function main() {
  console.log('Building map of original image files...');
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  buildOriginalExtensionsMap(IMAGES_DIR);
  console.log(`Mapped ${originalExtensionsMap.size} original image files.`);

  console.log(`Reverting references in: ${APP_DIR}`);
  await revertDirectory(APP_DIR);
  console.log('Rollback completed successfully!');
}

main().catch(err => {
  console.error('Fatal error during rollback:', err);
});
