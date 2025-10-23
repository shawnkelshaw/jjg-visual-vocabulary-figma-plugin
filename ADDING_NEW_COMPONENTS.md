# How to Add New Components to the Plugin

## Prerequisites

### Figma Access Token
You need a Figma personal access token with these scopes:
- `file_content:read` - Read the contents of and render images from files
- `library_assets:read` - Read data about individual components and styles
- `library_content:read` - Read components and styles published from individual files

**Get your token at:** https://www.figma.com/developers/api#access-tokens

**Store your token securely** - Do not commit it to the repository!

### Figma File Information
- **File Key:** `KNkwcYwSv6vp1yrH5SnpBs`
- **File Name:** JJG VIsual Vocabulary
- **File URL:** https://www.figma.com/design/KNkwcYwSv6vp1yrH5SnpBs/

## Step-by-Step Process

### 1. Ensure Component is Published in Figma

The component MUST be published to your Figma library to get a component key.

1. Open Figma Desktop App or Browser
2. Navigate to the component
3. Right-click → "Publish component" (or use Assets panel)
4. Verify it's published

### 2. Get Component Information

You can get the component's node-id from the Figma URL:
- Example URL: `https://www.figma.com/design/KNkwcYwSv6vp1yrH5SnpBs/JJG-VIsual-Vocabulary?node-id=359-2422`
- Node ID: `359-2422` (will be converted to `359:2422` for API)

### 3. Use Figma MCP Server (Preferred Method)

**Connect to Figma MCP:**
- MCP URL: `http://127.0.0.1:3845/mcp`
- Restart Figma desktop app if needed
- Ensure MCP server shows "good status"

**Extract component data:**
```javascript
// Use mcp1_get_design_context with node-id
mcp1_get_design_context({
  nodeId: "359-2422",
  clientLanguages: "typescript,javascript",
  clientFrameworks: "figma"
})

// Get screenshot
mcp1_get_screenshot({
  nodeId: "359-2422",
  clientLanguages: "typescript,javascript",
  clientFrameworks: "figma"
})
```

### 4. Fetch Component Key from Figma API

**Set your token:**
```bash
export FIGMA_TOKEN="your-figma-token-here"
```

**Create a script to fetch component data:**
```javascript
const https = require('https');
const FIGMA_FILE_KEY = 'KNkwcYwSv6vp1yrH5SnpBs';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`;

https.get(url, {
  headers: { 'X-Figma-Token': FIGMA_TOKEN }
}, (response) => {
  let data = '';
  response.on('data', (chunk) => data += chunk);
  response.on('end', () => {
    const json = JSON.parse(data);
    const components = json.meta?.components || {};
    
    // Search by node-id or name
    for (const [key, comp] of Object.entries(components)) {
      if (comp.node_id === '359:2422') {
        console.log('Component Key:', comp.key);
        console.log('Thumbnail URL:', comp.thumbnail_url);
      }
    }
  });
});
```

### 5. Download Thumbnail

**IMPORTANT:** Figma API may return PNG or SVG regardless of component type. Always verify the file type after downloading!

**Download thumbnails:**
```bash
# Create a script to download from Figma API
# Example: download-updated-thumbnails.js
# This fetches the thumbnail_url from the component metadata
```

**Verify file type (CRITICAL STEP):**
```bash
file thumbnails/ComponentName.svg
# If it says "PNG image data" instead of "SVG", rename it!
mv thumbnails/ComponentName.svg thumbnails/ComponentName.png
```

**Common issue:** Figma API often returns PNG data even for symbol components. The file extension doesn't matter to Figma's API - you must check the actual file type.

### 6. Add Component to code.ts

**Manual method:**
```typescript
{
  key: "component-key-from-api",
  name: "Component Name",
  description: "Component description...",
  category: "Category Name",
  thumbnail_url: "" // Will be filled by conversion script
}
```

**Automated method:**
Use the provided scripts (see Scripts section below)

### 7. Convert Thumbnails to Base64

**CRITICAL:** Use the correct conversion script based on actual file type, not component type!

**Step 1: Check what you have**
```bash
file thumbnails/YourComponent.*
```

**Step 2: Use the right converter**

**If file type is PNG:**
```bash
# 1. Add to convert-preface-thumbnails.js mapping:
const prefaceMapping = {
  // ... existing entries
  "Your Component Name": "YourComponent.png"
};

# 2. Run conversion:
node convert-preface-thumbnails.js
```

**If file type is SVG:**
```bash
# 1. Add to convert-all-thumbnails.js mapping:
const componentMapping = {
  // ... existing entries
  "Your Component Name": "YourComponent.svg"
};

# 2. Run conversion:
node convert-all-thumbnails.js
```

**What this does:** Embeds thumbnails as base64 data URIs directly in code.ts with correct MIME type (`data:image/png;base64,` or `data:image/svg+xml;base64,`)

### 8. Build and Test

```bash
npm run build
```

Test in Figma to ensure:
- Component appears in correct category
- Thumbnail displays correctly
- Description shows properly
- Component inserts correctly

### 9. Update Documentation

Update these files:
- `PUBLICATION_DETAILS.md` - Add to component list, update counts
- `UPDATE_SUMMARY.md` - Document what was added
- `convert-all-thumbnails.js` or `convert-preface-thumbnails.js` - Add to mapping

### 10. Commit to Git

```bash
git add code.ts ui.html PUBLICATION_DETAILS.md convert-*.js
git commit -m "Add [Component Name] to [Category]"
git push origin main
```

## Available Scripts

### Component Management
- `add-new-components.js` - Fetches and adds multiple components
- `add-concepts-principles.js` - Example of adding single component
- `update-component-key.js` - Updates placeholder keys with real ones

### Thumbnail Management
- `fetch-preface-thumbnails.js` - Downloads PNG thumbnails for Preface
- `download-new-thumbnails.js` - Downloads SVG thumbnails
- `convert-all-thumbnails.js` - Converts SVG thumbnails to base64
- `convert-preface-thumbnails.js` - Converts PNG thumbnails to base64

### Utilities
- `find-component-key.js` - Search for component by name/node-id
- `search-components.js` - Search components.json

## Component Categories

Current categories in the plugin:
1. **Preface** - Documentation/reference materials (PNG thumbnails)
2. **Pages & Files** - Page and file elements (SVG thumbnails)
3. **Data Elements** - Data-related symbols (SVG thumbnails)
4. **Logic Elements** - Decision/logic symbols (SVG thumbnails)
5. **Grouping Elements** - Container symbols (SVG thumbnails)
6. **References** - Reference/continuation symbols (SVG thumbnails)
7. **Connectors** - Arrow/connector symbols (SVG thumbnails)

## Thumbnail Format Guidelines

- **SVG**: Use for symbols/icons (small file size, crisp rendering)
- **PNG**: Use for documentation pages (Preface category)
- All thumbnails are embedded as base64 to avoid CDN expiration
- SVG thumbnails: typically 0.1-15 KB
- PNG thumbnails: typically 15-60 KB (Preface documents can be larger)

## Troubleshooting

### "Component not found"
- Ensure component is published in Figma library
- Check node-id format (use colon: `359:2422` not dash)
- Verify component key is correct
- URLs point to parent frames - look for "New" variant components nearby

### "Thumbnail not embedding" or "Broken image icon in plugin"
**ROOT CAUSE:** Wrong file type! Figma API returned PNG but you treated it as SVG (or vice versa)

**Fix:**
```bash
# 1. Check actual file type
file thumbnails/YourComponent.svg

# 2. If it says "PNG image data":
mv thumbnails/YourComponent.svg thumbnails/YourComponent.png

# 3. Add to convert-preface-thumbnails.js (NOT convert-all-thumbnails.js)
# 4. Re-run: node convert-preface-thumbnails.js
# 5. Rebuild: npm run build
```

**Why this happens:** Figma API returns PNG thumbnails for some components regardless of whether they're symbols or documents. Always verify with `file` command!

### "Category not showing"
- Update `ui.html` filter chips if adding new category
- Ensure category name matches exactly in code.ts

## Recent Updates

**October 22, 2025:**
- Added Concepts & Principles (Preface)
- Added File Stack (Pages & Files)
- Added Delay (References)
- Renamed "Pages" to "Pages & Files"
- Total: 23 components

## File Structure

```
Flow Diagrams/
├── code.ts                          # Main plugin code with component data
├── ui.html                          # Plugin UI with category filters
├── thumbnails/                      # Thumbnail image files
│   ├── *.svg                       # SVG thumbnails for symbols
│   └── *.png                       # PNG thumbnails for Preface
├── convert-all-thumbnails.js       # SVG → base64 converter
├── convert-preface-thumbnails.js   # PNG → base64 converter
├── add-new-components.js           # Add components script
└── PUBLICATION_DETAILS.md          # Plugin documentation
```
