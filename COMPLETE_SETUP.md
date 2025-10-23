# Complete "Concepts & Principles" Setup

## Current Status
✓ Component added to code.ts with placeholder key
✓ Component description extracted and added
✓ Screenshot captured from Figma

## To Complete the Setup:

### Step 1: Get Your Figma API Token
1. Go to: https://www.figma.com/developers/api#access-tokens
2. Click "Get personal access token"
3. Copy the token

### Step 2: Update the Component Key
```bash
export FIGMA_TOKEN="your-token-here"
node update-component-key.js
```

This will fetch the real component key from Figma and update code.ts.

### Step 3: Export the Thumbnail
1. Open Figma Desktop App
2. Navigate to the "Concepts & Principles" component
3. Select the entire component frame
4. Right-click → Export → PNG (or use Export settings)
5. Save as: `thumbnails/Concepts & Principles.png`

### Step 4: Convert Thumbnails to Base64
```bash
node convert-preface-thumbnails.js
```

This will embed all Preface thumbnails (including the new one) as base64 in code.ts.

### Step 5: Build the Plugin
```bash
npm run build
```

## What Was Done:
- ✓ Added "Concepts & Principles" as the FIRST item in the Preface category
- ✓ Extracted full component description from Figma
- ✓ Set up scripts to fetch component key and convert thumbnails
- ✓ Component will appear at the top of the Preface list in the plugin

## Files Modified:
- `code.ts` - Added new component entry
- `add-concepts-principles.js` - Script to add the component
- `update-component-key.js` - Script to fetch and update the real component key
- `find-component-key.js` - Helper script to search for components

## Next Time:
For future component updates, you can:
1. Export FIGMA_TOKEN once
2. Run `node extract-components.js` to refresh all component data
3. The component keys will be automatically available
