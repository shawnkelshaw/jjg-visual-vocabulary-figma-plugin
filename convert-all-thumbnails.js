// Batch convert all SVG thumbnails to base64 and update code.ts
const fs = require('fs');
const path = require('path');

const thumbnailsDir = './thumbnails';

// Map component names in code.ts to SVG filenames
const componentMapping = {
  "Page": "Page.svg",
  "Page Stack": "Page Stack.svg",
  "File": "File.svg",
  "File Stack": "File Stack.svg",
  "Decision Point": "Decision Point.svg",
  "Conditional Branch": "Conditional Branch.svg",
  "Conditional Selector": "Conditional Selector.svg",
  "Cluster": "Cluster.svg",
  "Concurrent": "Concurrent.svg",
  "Area of Commonality": "Area of Commonality.svg",
  "Conditional Area": "Conditional Area.svg",
  "Flow Area": "Flow Area.svg",
  "Continuation Point": "Continuation Point.svg",
  "Delay": "Delay.svg",
  "Relational Connector": "Relational Connector.svg",
  "Relational Connector (Conditional)": "Relational Connector (Conditional).svg",
  "Directional Connector": "Directional Connector.svg",
  "Directional Connector (Conditional)": "Directional Connector (Conditional).svg",
  "Dir Conn (No Upstream)": "Directional Connector (No Downstream).svg"
};

console.log('Reading code.ts...');
let codeContent = fs.readFileSync('./code.ts', 'utf8');

let successCount = 0;
let totalSize = 0;
const results = [];

console.log('\nConverting SVG thumbnails to base64...\n');

Object.entries(componentMapping).forEach(([componentName, filename]) => {
  const filepath = path.join(thumbnailsDir, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⚠️  Skipping ${componentName}: ${filename} not found`);
    results.push({ name: componentName, status: 'missing', filename });
    return;
  }
  
  // Read SVG file and convert to base64
  const buffer = fs.readFileSync(filepath);
  const base64 = buffer.toString('base64');
  const dataUri = `data:image/svg+xml;base64,${base64}`;
  
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
    results.push({ name: componentName, status: 'success', size: sizeKB });
  } else {
    console.log(`⚠️  Could not find in code.ts: ${componentName}`);
    results.push({ name: componentName, status: 'not_found_in_code', filename });
  }
});

console.log('\nWriting updated code.ts...');
fs.writeFileSync('./code.ts', codeContent);

console.log('\n=== Conversion Summary ===');
console.log(`✓ Successfully embedded: ${successCount} thumbnails`);
console.log(`Total embedded size: ${(totalSize / 1024).toFixed(2)} KB`);

const missing = results.filter(r => r.status === 'missing');
const notFound = results.filter(r => r.status === 'not_found_in_code');

if (missing.length > 0) {
  console.log(`\n⚠️  Missing files (${missing.length}):`);
  missing.forEach(r => console.log(`   - ${r.filename}`));
}

if (notFound.length > 0) {
  console.log(`\n⚠️  Not found in code.ts (${notFound.length}):`);
  notFound.forEach(r => console.log(`   - ${r.name}`));
}

console.log('\nNext step: Run "npm run build" to compile the updated plugin');
