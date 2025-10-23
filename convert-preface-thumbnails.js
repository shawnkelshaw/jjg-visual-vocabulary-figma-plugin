// Convert Preface PNG thumbnails to base64 and update code.ts
const fs = require('fs');
const path = require('path');

const thumbnailsDir = './thumbnails';

// Map component names to PNG filenames
const prefaceMapping = {
  "Concepts & Principles": "Concepts & Principles.png",
  "History & Background": "History & Background.png",
  "Symbol Definition Cheat Sheet": "Symbol Definition Cheat Sheet.png",
  "A Brief History of Logic": "A Brief History of Logic - Chapter 1.png",
  "Delay": "Delay.png",
  "File Stack": "File Stack.png",
  "Page": "Page.png",
  "Page Stack": "Page Stack.png",
  "File": "File.png"
};

console.log('Reading code.ts...');
let codeContent = fs.readFileSync('./code.ts', 'utf8');

let successCount = 0;
let totalSize = 0;

console.log('\nConverting Preface PNG thumbnails to base64...\n');

Object.entries(prefaceMapping).forEach(([componentName, filename]) => {
  const filepath = path.join(thumbnailsDir, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  Skipping ${componentName}: ${filename} not found`);
    return;
  }
  
  // Read PNG file and convert to base64
  const buffer = fs.readFileSync(filepath);
  const base64 = buffer.toString('base64');
  const dataUri = `data:image/png;base64,${base64}`;
  
  // Find and replace the thumbnail_url for this component
  const nameRegex = new RegExp(
    `name:\\s*"${componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",[\\s\\S]*?thumbnail_url:\\s*"[^"]*"`,
    'g'
  );
  
  if (codeContent.match(nameRegex)) {
    codeContent = codeContent.replace(nameRegex, (match) => {
      return match.replace(/thumbnail_url:\s*"[^"]*"/, `thumbnail_url: "${dataUri}"`);
    });
    
    const sizeKB = (buffer.length / 1024).toFixed(2);
    console.log(`✓ ${componentName}: ${sizeKB} KB`);
    successCount++;
    totalSize += buffer.length;
  } else {
    console.log(`⚠️  Could not find in code.ts: ${componentName}`);
  }
});

console.log('\nWriting updated code.ts...');
fs.writeFileSync('./code.ts', codeContent);

console.log('\n=== Conversion Summary ===');
console.log(`✓ Successfully embedded: ${successCount} Preface thumbnails`);
console.log(`Total embedded size: ${(totalSize / 1024).toFixed(2)} KB`);
console.log('\nNext step: Run "npm run build" to compile the updated plugin');
