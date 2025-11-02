# JJG Visual Vocabulary Library Plugin

A comprehensive Figma/FigJam plugin for browsing and inserting components from the Jesse James Garrett Visual Vocabulary library. This plugin provides a complete component library browser with 24 professionally designed symbols for information architecture and user experience documentation.

## Features

- **Complete Component Library**: 24 JJG Visual Vocabulary symbols with authentic designs
- **Category-Based Organization**: 8 organized categories including Start Here materials and Conversion Tables
- **Rich Text Descriptions**: Detailed component descriptions with proper formatting
- **Filter System**: Easy category switching with visual filter chips
- **Embedded Thumbnails**: All thumbnails embedded as base64 (no CDN expiration)
- **Dual Environment Support**: Works in both Figma design files and FigJam boards
- **Resizable Window**: Drag corners to resize the plugin window
- **FigJam Connectors**: Special connector components available only in FigJam

## Available Components

### Start Here (1 component)
- **JJG - Conceptual Underpinnings**: Core concepts and principles of the JJG Visual Vocabulary

### Conversion Tables (3 components)
- **JJG - Connectors**: Complete connector symbology reference
- **Basic Symbols**: ISO → JJG symbol conversion for foundational shapes
- **Logical Operators**: ISO → JJG symbol conversion for logical operators

### Cheatsheets (1 component)
- **JJG - Symbology Cheatsheet**: Comprehensive reference guide for all symbols

### Pages & Files (4 components)
- **Page**: Basic unit of user experience representation
- **Page Stack**: Multiple related pages or screens
- **File**: Documents, files, and data artifacts
- **File Stack**: Groups of functionally identical files

### Connectors (4 components)
- **Relational Connector**: Simple relationships between elements
- **Directional Connector**: Arrows showing user flow direction
- **Dir Conn (No Upstream)**: Directional connector with upstream restriction
- **Directional Connector (Conditional)**: Conditional directional flow

### Logical Operators (5 components)
- **Decision Point**: Decision points and branching logic
- **Conditional Branch**: Multiple pathway branching
- **Conditional Selector**: Selection and switching elements
- **Cluster**: Collection of related items
- **Concurrent**: Parallel activities and operations

### Grouping (3 components)
- **Area of Commonality**: Groups with shared attributes
- **Conditional Area**: Areas with specific conditions
- **Flow Area**: Defined flow or process zones

### Reference Points (1 component)
- **Continuation Point**: Flow continuation indicators

### Data (2 components)
- **Delay**: Pause or waiting period in user flow
- **File Stack**: Groups of functionally identical files

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
   - Categories: Start Here, Conversion Tables, Cheatsheets, Pages & Files, Connectors, Logical Operators, Grouping, Reference Points, Data

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
- ✅ **24 Complete Components**: All major JJG Visual Vocabulary symbols
- ✅ **Category Organization**: 8 categories with logical grouping
- ✅ **Embedded Thumbnails**: 3.8 MB plugin with all thumbnails as base64 data URIs
- ✅ **Rich Descriptions**: Formatted text with proper HTML escaping
- ✅ **Resizable Window**: User can resize plugin window by dragging corners
- ✅ **FigJam Support**: Special connector components for FigJam environment

## Library Reference

This plugin is based on Jesse James Garrett's Visual Vocabulary for Information Architecture, a standard set of symbols for documenting user experience design workflows and information architecture.

## License

This plugin implementation is for educational and internal use. The JJG Visual Vocabulary symbols and methodology are the intellectual property of Jesse James Garrett.
