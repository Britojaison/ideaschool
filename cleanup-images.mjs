import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public', 'images');
const APP_DIR = path.resolve('app');

// Code files to scan for references
const CODE_EXTENSIONS = ['.tsx', '.ts', '.css'];

// Image extensions to remove (original formats)
const ORIGINAL_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.JPG'];

// Helper to recursively find files in a directory
function getFilesRecursive(dirPath, allowedExtensions = null) {
  const results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...getFilesRecursive(fullPath, allowedExtensions));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (!allowedExtensions || allowedExtensions.includes(ext.toLowerCase()) || allowedExtensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function cleanUp() {
  console.log('--- Phase 1: Scanning Codebase for Image References ---');
  if (!fs.existsSync(APP_DIR)) {
    console.error(`App directory not found: ${APP_DIR}`);
    process.exit(1);
  }

  const codeFiles = getFilesRecursive(APP_DIR, CODE_EXTENSIONS);
  let combinedCodeContent = '';

  for (const file of codeFiles) {
    combinedCodeContent += fs.readFileSync(file, 'utf8') + '\n';
  }

  console.log(`Read ${codeFiles.length} code files. Total character count: ${combinedCodeContent.length}`);

  console.log('\n--- Phase 2: Processing Images Directory ---');
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const allImageFiles = getFilesRecursive(IMAGES_DIR);
  let deletedOriginalsCount = 0;
  let deletedUnusedWebpCount = 0;
  let keptWebpCount = 0;
  let keptOthersCount = 0;

  for (const file of allImageFiles) {
    const ext = path.extname(file);
    const relativePath = path.relative(IMAGES_DIR, file);
    const normalizedRelativePath = relativePath.replace(/\\/g, '/');
    const baseName = path.basename(file);

    // 1. Delete original PNGs/JPGs/JPEGs
    if (ORIGINAL_EXTENSIONS.includes(ext) || ORIGINAL_EXTENSIONS.includes(ext.toLowerCase())) {
      console.log(`Deleting original image: ${normalizedRelativePath}`);
      fs.unlinkSync(file);
      deletedOriginalsCount++;
    } 
    // 2. Handle WebP images
    else if (ext.toLowerCase() === '.webp') {
      // Check if this WebP is referenced in the code.
      // We check for:
      // - The filename (e.g. "arjun.webp")
      // - The relative path (e.g. "alumni-posters/some-poster.webp")
      // - The URL-encoded filename (e.g. "idea%20logo.webp")
      const encodedBaseName = encodeURIComponent(baseName);
      const encodedRelativePath = normalizedRelativePath.split('/').map(segment => encodeURIComponent(segment)).join('/');

      const isUsed = 
        combinedCodeContent.includes(baseName) ||
        combinedCodeContent.includes(normalizedRelativePath) ||
        combinedCodeContent.includes(encodedBaseName) ||
        combinedCodeContent.includes(encodedRelativePath);

      if (!isUsed) {
        console.log(`Deleting unused WebP: ${normalizedRelativePath}`);
        fs.unlinkSync(file);
        deletedUnusedWebpCount++;
      } else {
        keptWebpCount++;
      }
    } 
    // 3. Keep other assets like .mp4 and .svg
    else {
      keptOthersCount++;
    }
  }

  console.log('\n--- Cleanup Summary ---');
  console.log(`Deleted Original Images (.png, .jpg, .jpeg): ${deletedOriginalsCount}`);
  console.log(`Deleted Unused WebP Images: ${deletedUnusedWebpCount}`);
  console.log(`Kept Used WebP Images: ${keptWebpCount}`);
  console.log(`Kept Other Assets (SVGs, Videos, etc.): ${keptOthersCount}`);
}

cleanUp();
