# How to Reload the Plugin After Updates

## The Problem
After running `npm run build`, Figma continues to use the **cached version** of the plugin. You must manually reload it to see changes.

## Solution: Reload the Plugin

### Method 1: Close and Reopen (Recommended)
1. **Close the plugin** panel in Figma
2. **Reopen** the plugin from:
   - Plugins menu → Development → JJG Visual Vocabulary Library
   - Or: Right-click → Plugins → Development → JJG Visual Vocabulary Library

### Method 2: Restart Figma
1. **Quit Figma** completely (Cmd+Q on Mac)
2. **Reopen Figma**
3. **Open the plugin** again

### Method 3: Use Developer Tools (Advanced)
1. Right-click on the plugin panel
2. Select "Inspect"
3. In DevTools console, type: `location.reload()`
4. Press Enter

## Verification Checklist

After reloading, verify these changes are visible:

### ✅ New Components Appear:
- [ ] "Concepts & Principles" shows in Preface (first position)
- [ ] "File Stack" shows in Pages & Files
- [ ] "Delay" shows in References

### ✅ Thumbnails Display:
- [ ] File Stack shows stacked file icon (not broken image)
- [ ] Delay shows rounded rectangle icon (not broken image)
- [ ] All other thumbnails still display correctly

### ✅ Category Changes:
- [ ] "Pages & Files" tab shows (not "Pages")
- [ ] Preface tab appears first/separate

## If Thumbnails Still Don't Show

### Check the Build
```bash
# Verify code.js was updated
ls -lh code.js

# Should show recent timestamp and ~3.1 MB size
```

### Rebuild if Needed
```bash
npm run build
```

### Clear Figma Cache (Nuclear Option)
1. Quit Figma
2. Delete cache folder:
   - Mac: `~/Library/Application Support/Figma/`
3. Restart Figma
4. Reload plugin

## Current Status

**Last Build:** October 22, 2025
**Plugin Size:** 3.1 MB
**Total Components:** 23
**All Thumbnails:** Embedded as base64 ✓

### Verified Embedded:
- ✓ Concepts & Principles (76.23 KB PNG)
- ✓ File Stack (3.71 KB SVG)  
- ✓ Delay (1.56 KB SVG)
- ✓ All 20 other components

Run `node verify-thumbnails.js` to confirm all 23 thumbnails are embedded.
