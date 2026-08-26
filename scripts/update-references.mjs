import fs from 'fs';
import path from 'path';

const APP_DIR = path.resolve('app');

// File extensions to scan and modify
const FILES_TO_SCAN = ['.tsx', '.ts', '.css'];

// Regex to match extensions inside quotes: e.g. "image.png", 'image.jpg', `image.jpeg`
const QUOTE_REGEX = /(["'`])([^"'`\n]*?\.(?:png|jpg|jpeg|JPG))(["'`])/g;

// Regex to match extensions inside CSS url(): e.g. url(/images/image.png) or url("image.jpg")
const CSS_URL_REGEX = /url\(['"]?([^'"\)\n]+?\.(?:png|jpg|jpeg|JPG))['"]?\)/g;

function replaceExtensions(content) {
  let updated = content;

  // 1. Replace inside quotes
  updated = updated.replace(QUOTE_REGEX, (match, quoteOpen, filePath, quoteClose) => {
    // Determine original extension
    const ext = path.extname(filePath);
    const newPath = filePath.slice(0, -ext.length) + '.webp';
    return `${quoteOpen}${newPath}${quoteClose}`;
  });

  // 2. Replace inside CSS url()
  updated = updated.replace(CSS_URL_REGEX, (match, filePath) => {
    const ext = path.extname(filePath);
    const newPath = filePath.slice(0, -ext.length) + '.webp';
    return `url("${newPath}")`;
  });

  return updated;
}

async function processDirectory(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      
      if (FILES_TO_SCAN.includes(ext)) {
        try {
          const content = await fs.promises.readFile(fullPath, 'utf8');
          const updatedContent = replaceExtensions(content);

          if (content !== updatedContent) {
            await fs.promises.writeFile(fullPath, updatedContent, 'utf8');
            console.log(`Updated references in: ${path.relative(APP_DIR, fullPath)}`);
          }
        } catch (error) {
          console.error(`  [ERROR] Failed to process ${entry.name}:`, error.message);
        }
      }
    }
  }
}

async function main() {
  console.log(`Starting reference updates in: ${APP_DIR}`);
  if (!fs.existsSync(APP_DIR)) {
    console.error(`Directory not found: ${APP_DIR}`);
    process.exit(1);
  }
  
  await processDirectory(APP_DIR);
  console.log('Reference updates completed successfully!');
}

main().catch(err => {
  console.error('Fatal error during reference updates:', err);
});
