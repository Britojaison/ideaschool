import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public', 'images');

// Supported extensions (case-insensitive)
const EXTENSIONS_TO_CONVERT = ['.png', '.jpg', '.jpeg'];

async function convertDirectory(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await convertDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      if (EXTENSIONS_TO_CONVERT.includes(ext)) {
        const baseName = path.basename(entry.name, path.extname(entry.name));
        const outPath = path.join(dirPath, `${baseName}.webp`);

        console.log(`Processing: ${path.relative(IMAGES_DIR, fullPath)}`);
        
        try {
          const stats = fs.statSync(fullPath);
          const fileSizeInBytes = stats.size;
          const fileSizeInKB = fileSizeInBytes / 1024;

          let pipeline = sharp(fullPath);

          if (ext === '.png') {
            if (fileSizeInKB > 500) {
              // Large PNG: convert to lossy WebP at 90% quality to keep file size small
              console.log(`  -> Large PNG (${Math.round(fileSizeInKB)}KB): Using lossy WebP (Quality: 90)`);
              pipeline = pipeline.webp({ quality: 90, lossy: true });
            } else {
              // Small PNG (likely logo/icon): convert to lossless WebP for pixel-perfection
              console.log(`  -> Small PNG (${Math.round(fileSizeInKB)}KB): Using lossless WebP`);
              pipeline = pipeline.webp({ lossless: true });
            }
          } else {
            // JPG/JPEG: convert to WebP at 90% quality
            pipeline = pipeline.webp({ quality: 90 });
          }

          await pipeline.toFile(outPath);
          console.log(`  -> Saved WebP: ${path.relative(IMAGES_DIR, outPath)}`);
        } catch (error) {
          console.error(`  [ERROR] Failed to convert ${entry.name}:`, error.message);
        }
      }
    }
  }
}

async function main() {
  console.log(`Starting image conversion in: ${IMAGES_DIR}`);
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  
  await convertDirectory(IMAGES_DIR);
  console.log('Image conversion completed successfully!');
}

main().catch(err => {
  console.error('Fatal error during conversion:', err);
});
