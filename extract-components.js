// Script to extract component keys and metadata from your Figma library
// You'll need a Figma personal access token to run this

const FIGMA_FILE_KEY = 'KNkwcYwSv6vp1yrH5SnpBs';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'your-figma-token-here';

function categorizeComponent(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('page')) return 'Pages';
  if (lowerName.includes('area') || lowerName.includes('common') || lowerName.includes('flow')) return 'Grouping Elements';
  if (lowerName.includes('concurrent') || lowerName.includes('simultaneous')) return 'Logic Elements';
  if (lowerName.includes('continuation') || lowerName.includes('reference')) return 'References';
  if (lowerName.includes('connector') || lowerName.includes('arrow')) return 'Connectors';
  if (lowerName.includes('note') || lowerName.includes('annotation')) return 'Annotations';
  
  return 'Basic Elements';
}

function getComponentDescription(name) {
  const descriptions = {
    'Page': 'Page\n\nThe basic unit of user experience on the Web is, of course, the page, which we represent as a simple rectangle. Note that the page is a unit of presentation, not (necessarily) a unit of implementation -- one page in your diagram may correspond to multiple HTML files (as in a frameset interface) or multiple units of code (as in a server-side include or database-driven implementation).\n\nWe use labels on pages and files to identify them. These don\'t need to correlate to actual designations such as HTML <TITLE> elements or filenames, but they do need to be unique for each page or file in the diagram. Unique numeric identifiers and type designations also provide a good way to keep track of all the pages and files in your diagram.',
    'Page Stack': 'Page Stack\n\nMultiple pages or screens stacked together, indicating a series of related pages or a collection of pages that share common characteristics. This symbol represents a group of pages that function as a unit in the user experience.',
    'File': 'File\n\nA document, file, or data artifact in the system. This symbol represents any kind of file or document that is created, processed, or referenced in the user experience flow. Files can include documents, images, data files, reports, or any other digital artifacts that users interact with.',
    'Decision Point': 'Decision Point\n\nA point in the user flow where a decision must be made or where the flow branches based on user input, system conditions, or other criteria. This symbol represents conditional logic, branching paths, or choice points that determine the next steps in the user experience.',
    'Conditional Branch': 'Conditional Branch\n\nA branching element that represents conditional logic or multiple pathways in a user flow. This symbol indicates where the flow splits into different directions based on specific conditions, user choices, or system states. It\'s used to show parallel or alternative paths that users might take.',
    'Conditional Selector': 'Conditional Selector\n\nA selection or switching element that represents conditional logic where one option is chosen from multiple possibilities. This symbol indicates a point where different conditions are evaluated and a specific path or action is selected based on the criteria. It\'s commonly used for switches, toggles, or conditional routing.',
    'Cluster': 'Cluster\n\nA grouping element that represents a collection or cluster of related items, processes, or components. This symbol is used to show when multiple elements are grouped together as a unit, indicating logical or functional relationships. Clusters help organize complex diagrams by showing which elements belong together.',
    'Area of Commonality': 'Area of Commonality\n\nThe area element (a rounded-corner rectangle) is used to identify a group of pages that share one or more common attributes (such as appearing in a pop-up window, or having some unique design treatment). Use labels to identify these attributes or (as with connectors), refer to notes elsewhere in the document if you have a lot to say.',
    'Conditional Area': 'Conditional Area\n\nA conditional grouping element that represents an area or region where certain conditions apply. This symbol indicates a zone where specific rules, states, or behaviors are active. It\'s used to show conditional boundaries, temporary states, or areas where different logic applies compared to the surrounding context.',
    'Flow Area': 'Flow Area\n\nA flow grouping element that represents a defined area or zone where a specific flow or process takes place. This symbol indicates a bounded region where particular activities, workflows, or user journeys occur. It\'s used to show flow boundaries, process areas, or regions where specific interactions happen.',
    'Concurrent': 'Concurrent\n\nA concurrent process element that represents parallel activities or simultaneous operations in a user flow. This symbol indicates where multiple processes, tasks, or user actions happen at the same time, showing parallel execution paths that may later converge or continue independently.',
    'Continuation Point': 'Continuation Point\n\nA reference element that indicates the flow continues elsewhere in the diagram or on another page. This symbol is used to show connections between different parts of a complex flow diagram, helping to maintain clarity when flows span multiple pages or sections. It typically includes labels or identifiers to show where the flow continues.'
  };
  
  return descriptions[name] || `${name}\n\nA component in the JJG Visual Vocabulary system.`;
}

async function extractComponents() {
  try {
    console.log('Fetching published components from Figma API...');
    
    if (FIGMA_TOKEN === 'your-figma-token-here') {
      console.error('Please set your FIGMA_TOKEN environment variable');
      process.exit(1);
    }
    
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const componentsData = await response.json();
    console.log(`Components API Response status: ${response.status}`);
    console.log(`Found components metadata: ${Object.keys(componentsData.meta.components).length}`);
    
    console.log('\nExtracting published components...');
    
    if (componentsData.meta.component_sets && Object.keys(componentsData.meta.component_sets).length > 0) {
      console.log('\n=== ALL COMPONENT SETS ===');
      for (const [setKey, setMeta] of Object.entries(componentsData.meta.component_sets)) {
        console.log(`Component Set: ${setMeta.name}`);
        console.log(`Key: ${setKey}`);
        console.log(`Node ID: ${setMeta.node_id}`);
        console.log(`Description: ${setMeta.description || 'No description'}`);
        console.log('---');
      }
    } else {
      console.log('No component sets found');
    }
    
    console.log('\n=== ALL COMPONENTS WITH FULL DETAILS ===');
    for (const [componentKey, componentMeta] of Object.entries(componentsData.meta.components)) {
      // Look for component at node 30:848
      if (componentMeta.node_id === '30:848' || componentMeta.node_id.startsWith('30:84')) {
        console.log(`\n=== COMPONENT DETAILS ===`);
        console.log(`Component: ${componentMeta.name}`);
        console.log(`Key: ${componentKey}`);
        console.log(`Node ID: ${componentMeta.node_id}`);
        console.log(`Hash Key: ${componentMeta.key}`);
        console.log(`Thumbnail: ${componentMeta.thumbnail_url}`);
        console.log(`Description: ${componentMeta.description || 'No description'}`);
        console.log(`Component Set ID: ${componentMeta.component_set_id || 'None'}`);
        console.log(`Created At: ${componentMeta.created_at || 'Unknown'}`);
        console.log(`Updated At: ${componentMeta.updated_at || 'Unknown'}`);
        console.log('All metadata:', JSON.stringify(componentMeta, null, 2));
        console.log('================================');
      }
    }
    
    const publishedComponents = [];
    
    for (const [componentKey, componentMeta] of Object.entries(componentsData.meta.components)) {
      publishedComponents.push({
        name: componentMeta.name.replace('Symbol=', ''),
        key: componentMeta.key,
        description: getComponentDescription(componentMeta.name.replace('Symbol=', ''))
      });
    }
    
    console.log(`\nFound ${publishedComponents.length} published components total:`);
    publishedComponents.forEach(comp => {
      console.log(`- ${comp.name} (${comp.key})`);
      if (comp.description && comp.description !== `${comp.name}\n\nA component in the JJG Visual Vocabulary system.`) {
        console.log(`  Description: ${comp.description.split('\n\n')[1] || 'No description'}`);
      }
    });
    
    // Write to components.json
    const fs = require('fs');
    fs.writeFileSync('components.json', JSON.stringify(publishedComponents, null, 2));
    console.log('\nComponents written to components.json');
    
  } catch (error) {
    console.error('Error extracting components:', error);
  }
}

extractComponents();
