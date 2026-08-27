import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public', 'images');

// Original extensions to delete
const ORIGINAL_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.JPG'];

// Helper to recursively find files in a directory
function getFilesRecursive(dirPath) {
  const results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...getFilesRecursive(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

function cleanUpOriginalsOnly() {
  console.log('--- Cleaning Up Original PNG and JPG Images Only ---');
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const allImageFiles = getFilesRecursive(IMAGES_DIR);
  let deletedOriginalsCount = 0;
  let keptWebpCount = 0;
  let keptOthersCount = 0;

  for (const file of allImageFiles) {
    const ext = path.extname(file);
    const relativePath = path.relative(IMAGES_DIR, file);
    const normalizedRelativePath = relativePath.replace(/\\/g, '/');

    if (ORIGINAL_EXTENSIONS.includes(ext) || ORIGINAL_EXTENSIONS.includes(ext.toLowerCase())) {
      console.log(`Deleting original image: ${normalizedRelativePath}`);
      fs.unlinkSync(file);
      deletedOriginalsCount++;
    } else if (ext.toLowerCase() === '.webp') {
      keptWebpCount++;
    } else {
      keptOthersCount++;
    }
  }

  console.log('\n--- Cleanup Summary ---');
  console.log(`Deleted Original Images (.png, .jpg, .jpeg, .JPG): ${deletedOriginalsCount}`);
  console.log(`Preserved WebP Images: ${keptWebpCount}`);
  console.log(`Preserved Other Assets (SVGs, Videos, etc.): ${keptOthersCount}`);
}

cleanUpOriginalsOnly();
