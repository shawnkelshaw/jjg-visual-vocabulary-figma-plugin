# JJG Visual Vocabulary Library Plugin

A comprehensive Figma/FigJam plugin for browsing and inserting components from the Jesse James Garrett Visual Vocabulary library. This plugin provides a complete component library browser with 15 professionally designed symbols for information architecture and user experience documentation.

## Features

- **Complete Component Library**: 15 JJG Visual Vocabulary symbols with authentic designs
- **Category-Based Organization**: 7 organized categories including Preface materials
- **Rich Text Descriptions**: Detailed component descriptions with proper formatting
- **Filter System**: Easy category switching with visual filter chips
- **Component Set Integration**: Uses actual published Figma library components
- **Dual Environment Support**: Works in both Figma design files and FigJam boards
- **Accessibility Features**: Full keyboard navigation and screen reader support

## Available Components

### Preface (3 components)
- **History & Background**: Historical context and background information
- **Symbol Definition Cheat Sheet**: Comprehensive reference guide for all symbols
- **A Brief History of Logic**: Intellectual foundations of the visual vocabulary

### Pages (2 components)
- **Page**: Basic unit of user experience representation
- **Page Stack**: Multiple related pages or screens

### Connectors (0 components)
- *Reserved for future connector elements*

### Data (1 component)
- **File**: Documents, files, and data artifacts

### Logic (5 components)
- **Decision Point**: Decision points and branching logic
- **Conditional Branch**: Multiple pathway branching
- **Conditional Selector**: Selection and switching elements
- **Cluster**: Collection of related items
- **Concurrent**: Parallel activities and operations

### Grouping (3 components)
- **Area of Commonality**: Groups with shared attributes
- **Conditional Area**: Areas with specific conditions
- **Flow Area**: Defined flow or process zones

### References (1 component)
- **Continuation Point**: Flow continuation indicators

## Installation

1. Open Figma Desktop App
2. Go to Plugins → Development → Import plugin from manifest
3. Select the `manifest.json` file from this directory
4. The plugin will appear in your Plugins menu as "JJG Visual Vocabulary Library"

## Usage

1. **Open the Plugin**: 
   - In Figma/FigJam, go to Plugins → JJG Visual Vocabulary Library → Open Component Library
   - The plugin opens with the Preface category active by default

2. **Browse Categories**:
   - Use the filter chips at the top to switch between categories
   - Categories: Preface, Pages, Connectors, Data, Logic, Grouping, References

3. **Select Components**:
   - Click any component card to select it
   - The middle panel shows detailed descriptions with rich text formatting
   - Component thumbnails show the latest "(New)" variants with visual indicators

4. **Insert Components**:
   - With a component selected, click the "Insert" button
   - Components are imported as actual library component sets with variant support
   - Use Figma's Properties panel to select different variants after insertion

## Development

### Build the Plugin
```bash
npm install
npm run build
```

### Component Extraction (Optional)
To extract component metadata from Figma API:
1. Set your Figma Personal Access Token as an environment variable:
   ```bash
   export FIGMA_TOKEN="your-figma-personal-access-token"
   ```
2. Run the extraction script:
   ```bash
   node extract-components.js
   ```

### Watch Mode (for development)
```bash
npm run watch
```

### File Structure
- `manifest.json` - Plugin configuration and metadata
- `code.ts` - Main plugin logic (compiles to `code.js`)
- `ui.html` - Plugin UI interface with complete component browser
- `extract-components.js` - Utility script for extracting component metadata from Figma API
- `components.json` - Generated component catalog data
- `package.json` - Build configuration and dependencies

## Technical Implementation

### Component Integration
- **Real Library Components**: Uses `figma.importComponentSetByKeyAsync()` for authentic JJG symbols
- **Component Sets**: Supports multiple variants per component with Properties panel integration
- **Hash Key Management**: Maintains component hash keys for reliable library imports
- **Node ID Mapping**: Maps component set node IDs for proper import resolution

### UI Architecture
- **Category Filtering**: Dynamic filter chips with state management
- **Rich Text Rendering**: HTML-safe text processing with paragraph and formatting support
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Responsive Layout**: Three-panel design with flush alignment and proper spacing

### Current Features
- ✅ **15 Complete Components**: All major JJG Visual Vocabulary symbols
- ✅ **Category Organization**: 7 categories with logical grouping
- ✅ **Component Variants**: Support for "(New)" and other component variants
- ✅ **Rich Descriptions**: Formatted text with proper HTML escaping
- ✅ **Library Integration**: Direct import from published Figma library

## Library Reference

This plugin is based on Jesse James Garrett's Visual Vocabulary for Information Architecture, a standard set of symbols for documenting user experience design workflows and information architecture.

## License

This plugin implementation is for educational and internal use. The JJG Visual Vocabulary symbols and methodology are the intellectual property of Jesse James Garrett.
