// JJG Visual Vocabulary Library
// Component library browser for JJG Visual Vocabulary symbols

interface Component {
  key: string;
  name: string;
  description: string;
  category: string;
  thumbnail_url?: string;
}

let selectedComponent: Component | null = null;
const LIBRARY_KEY = 'KNkwcYwSv6vp1yrH5SnpBs'; // JJG Visual Vocabulary library key

// Manual component catalog
const componentsData = {
  components: [
    {
      key: "01e59ffc0263d2a33e3f7bb5e81a9d712ea7c55c",
      name: "History & Background",
      description: "History & Background\n\nProvides historical context and background information about the JJG Visual Vocabulary system. This component contains the foundational knowledge about how and why this visual language was developed, its evolution, and its significance in user experience design and information architecture.",
      category: "Preface",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/XWp/4N0/xTYKUZQWg0g6yljW/30_847.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6376b6bbf43c4e9a1a912d00a8cf0be087a1bc12786f21449171b327af5d8a28"
    },
    {
      key: "564d597cbae6ba1f6a733f1d38a654d7b9ae1c41",
      name: "Symbol Definition Cheat Sheet",
      description: "Symbol Definition Cheat Sheet\n\nA comprehensive reference guide that displays all the visual vocabulary symbols and their meanings. This cheat sheet serves as a quick reference for understanding the different symbols used in flow diagrams and user experience documentation. Essential for teams working with the JJG Visual Vocabulary system.",
      category: "Preface",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/2Ja/RD5/ohvT8gzDhHqDSot4/30_846.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=286a4517f6e0f3cfd5ab39f1d555eabb920a71cfc4d7703a01b39992f8b0b951"
    },
    {
      key: "387bbff0f5e14b263089e255693dadd45d3ace87",
      name: "A Brief History of Logic",
      description: "A Brief History of Logic\n\nExplores the historical development and evolution of logical thinking and diagrammatic representation in information design. This component provides deeper context about the intellectual foundations that underpin the visual vocabulary system and its relationship to formal logic and information architecture principles.",
      category: "Preface",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/Pcl/v18/GzPS1wcf4go4IzoL/30_848.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d01d07609a7d2a1ead9112be9de545c76ba80fb853c53c217ea3f1228a5154f6"
    },
    {
      key: "65fb06ff5b5131d467a8d0866f5a3fa975e7ee1a",
      name: "Page",
      description: "Page\n\nThe basic unit of user experience on the Web is, of course, the page, which we represent as a simple rectangle. Note that the page is a unit of presentation, not (necessarily) a unit of implementation -- one page in your diagram may correspond to multiple HTML files (as in a frameset interface) or multiple units of code (as in a server-side include or database-driven implementation).\n\nWe use labels on pages and files to identify them. These don't need to correlate to actual designations such as HTML <TITLE> elements or filenames, but they do need to be unique for each page or file in the diagram. Unique numeric identifiers and type designations also provide a good way to keep track of all the pages and files in your diagram.",
      category: "Pages",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/ryY/HKS/2PpRrjyYNoo3QwYn/1_13.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3f0eb05479737a01d418e6c537382cc7577d0f3af0b6232642241dc3faa3b385"
    },
    {
      key: "1132d6e236414f8b79cdc4d098673579bbab32db",
      name: "Page Stack",
      description: "Page Stack\n\nMultiple pages or screens stacked together, indicating a series of related pages or a collection of pages that share common characteristics. This symbol represents a group of pages that function as a unit in the user experience.",
      category: "Pages",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/iHD/ni5/XjwUQwAybpSFjA1v/2_32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1705e2336d7ac94d455650944c1e569f0886213cc5f9d035dca6145b55f96142"
    },
    {
      key: "a413a758807811855ffc1c4aeb12b29797bef1ef",
      name: "File",
      description: "File\n\nA document, file, or data artifact in the system. This symbol represents any kind of file or document that is created, processed, or referenced in the user experience flow. Files can include documents, images, data files, reports, or any other digital artifacts that users interact with.",
      category: "Data Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/bJp/K8l/2Kcu2Y9qbqjD85o4/3_41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=65497369c1dc5f2b3150be619c8299742a8ba243b8053e3000ed9ae0eb0781d7"
    },
    {
      key: "dff8611e47e4a61cca725b3c68dbcfec8defe390",
      name: "Decision Point",
      description: "Decision Point\n\nA point in the user flow where a decision must be made or where the flow branches based on user input, system conditions, or other criteria. This symbol represents conditional logic, branching paths, or choice points that determine the next steps in the user experience.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/7Vl/gqg/NIPH1iqnZkgEYH9A/8_6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=19f98fbe06129c56dac80c290bef793d8e4a36b85a7039f92346e968a220c475"
    },
    {
      key: "ee4ae413a392a51f22ca8936ef0182f0389c9b52",
      name: "Conditional Branch",
      description: "Conditional Branch\n\nA branching element that represents conditional logic or multiple pathways in a user flow. This symbol indicates where the flow splits into different directions based on specific conditions, user choices, or system states. It's used to show parallel or alternative paths that users might take.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/F64/Akk/1g0KhP8XFK5q86kj/8_28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=df0af99c0442c842487e4639676c2a3f047e3efe071755f508d3cbf2df5ab724"
    },
    {
      key: "89d66eddba9e39872b4867c8022db9723fd70241",
      name: "Conditional Selector",
      description: "Conditional Selector\n\nA selection or switching element that represents conditional logic where one option is chosen from multiple possibilities. This symbol indicates a point where different conditions are evaluated and a specific path or action is selected based on the criteria. It's commonly used for switches, toggles, or conditional routing.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/0AJ/XqM/PhpXKtyydc0NX6kE/9_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1905fde88dcca35c070c3a53157ef23de1fce8ae93faaba5d08e471ad2cd1f46"
    },
    {
      key: "2bb4fbc62e5e1f8cbdb8f92cccc3d92028a5b8fb",
      name: "Cluster",
      description: "Cluster\n\nA grouping element that represents a collection or cluster of related items, processes, or components. This symbol is used to show when multiple elements are grouped together as a unit, indicating logical or functional relationships. Clusters help organize complex diagrams by showing which elements belong together.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/TPu/yWL/Eofz9x1sO8h6ePzE/12_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1b81ad0a2c7a9f397ca066ca5281e74c212986072a0a3b575d5889d269f5fc23"
    },
    {
      key: "a78a0847b39481f4c8fde57153035680a28e1d93",
      name: "Area of Commonality",
      description: "Area of Commonality\n\nThe area element (a rounded-corner rectangle) is used to identify a group of pages that share one or more common attributes (such as appearing in a pop-up window, or having some unique design treatment). Use labels to identify these attributes or (as with connectors), refer to notes elsewhere in the document if you have a lot to say.",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/qbb/dG6/rvzpvxCz0L9EbxYp/5_44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d3df0ba53bbe4361131f32e8e43db96461a868c3ddc4a057de10b0f09cf61d86"
    },
    {
      key: "fbf58fb33deb7fd0d82200d695c1a3c6fedd3f76",
      name: "Conditional Area",
      description: "Conditional Area\n\nA conditional grouping element that represents an area or region where certain conditions apply. This symbol indicates a zone where specific rules, states, or behaviors are active. It's used to show conditional boundaries, temporary states, or areas where different logic applies compared to the surrounding context.",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/ysl/QTp/ftZO2ZK2VMG0Ek9Q/13_46.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d37240eaed376c439c30a597d4f1ca20bf955f6222e2e339bb200695f19ec5e0"
    },
    {
      key: "77b847931af9bbd88eefcdb97b98c9a2d8e3817c",
      name: "Flow Area",
      description: "Flow Area\n\nA flow grouping element that represents a defined area or zone where a specific flow or process takes place. This symbol indicates a bounded region where particular activities, workflows, or user journeys occur. It's used to show flow boundaries, process areas, or regions where specific interactions happen.",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/Txp/opG/TE5bdAtfz9QxAN4J/7_128.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=32ffd22d8a67f3bf2fd9af8ec3462914202600daf0255ae080e5f63e5c78a464"
    },
    {
      key: "34ebe982289aaa7c1741b7e42f648b1d635e63c1",
      name: "Concurrent",
      description: "Concurrent\n\nA concurrent process element that represents parallel activities or simultaneous operations in a user flow. This symbol indicates where multiple processes, tasks, or user actions happen at the same time, showing parallel execution paths that may later converge or continue independently.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/hRm/0rn/4RDIGpslVfh3Vzni/4_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6a1730074204297fd2aacbb8fe7048742f4ba051ea85a872a646c220bcec0a92"
    },
    {
      key: "4c59b0310f2bce552f24fe009cb307697b87dfe7",
      name: "Continuation Point",
      description: "Continuation Point\n\nA reference element that indicates the flow continues elsewhere in the diagram or on another page. This symbol is used to show connections between different parts of a complex flow diagram, helping to maintain clarity when flows span multiple pages or sections. It typically includes labels or identifiers to show where the flow continues.",
      category: "References",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/Vtl/l4n/NlcQzNoqMKgCiop7/5_29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=921e158f310c58def756ad4147539bc45398ce17785d788f240821bc0b53aa22"
    }
  ]
};

figma.on('run', ({ command }) => {
  if (command === 'open') openUI();
  // If the user launches the plugin directly (no command), open the UI
  if (!command) openUI();
});

// Handle drop events for drag-and-drop functionality (not available in all contexts)
// figma.on('drop', handleDrop);

function openUI() {
  figma.showUI(__html__, { width: 600, height: 700 });
  
  figma.ui.onmessage = async (msg) => {
    if (msg?.type === 'get-components') {
      // Send component catalog to UI
      figma.ui.postMessage({
        type: 'components-data',
        components: componentsData.components
      });
      return;
    }
    
    if (msg?.type === 'select-component') {
      selectedComponent = msg.component;
      figma.ui.postMessage({
        type: 'component-selected',
        component: selectedComponent
      });
      return;
    }
    
    if (msg?.type === 'insert-component') {
      if (selectedComponent) {
        await insertComponentInstance(selectedComponent, msg.position);
      }
      return;
    }
    
    if (msg?.type === 'drag-start') {
      selectedComponent = msg.component;
      return;
    }
  };
}

async function insertComponentInstance(component: Component, position?: { x: number, y: number }) {
  try {
    console.log(`Attempting to import component: ${component.name} with key: ${component.key}`);
    
    let node: SceneNode | null = null;
    
    // Try multiple key formats systematically, including the real hash key
    const keyFormats = [
      component.key,                                 // Real component hash key
      "1:14",                                        // Page component set node ID
      "2:33",                                        // Page Stack component set node ID
      "3:54",                                        // File component set node ID
      "4:8",                                         // Concurrent component set node ID
      "5:30",                                        // Continuation Point component set node ID
      "5:48",                                        // Area of Commonality component set node ID
      "7:130",                                       // Flow Area component set node ID
      "8:8",                                         // Decision Point component set node ID
      "8:29",                                        // Conditional Branch component set node ID
      "9:8",                                         // Conditional Selector component set node ID
      "12:8",                                        // Cluster component set node ID
      "13:47",                                       // Conditional Area component set node ID
      "KNkwcYwSv6vp1yrH5SnpBs:1:14",               // File:Page component set
      "KNkwcYwSv6vp1yrH5SnpBs:2:33",               // File:Page Stack component set
      "KNkwcYwSv6vp1yrH5SnpBs:3:54",               // File:File component set
      "KNkwcYwSv6vp1yrH5SnpBs:4:8",                // File:Concurrent component set
      "KNkwcYwSv6vp1yrH5SnpBs:5:30",               // File:Continuation Point component set
      "KNkwcYwSv6vp1yrH5SnpBs:5:48",               // File:Area of Commonality component set
      "KNkwcYwSv6vp1yrH5SnpBs:7:130",              // File:Flow Area component set
      "KNkwcYwSv6vp1yrH5SnpBs:8:8",                // File:Decision Point component set
      "KNkwcYwSv6vp1yrH5SnpBs:8:29",               // File:Conditional Branch component set
      "KNkwcYwSv6vp1yrH5SnpBs:9:8",                // File:Conditional Selector component set
      "KNkwcYwSv6vp1yrH5SnpBs:12:8",               // File:Cluster component set
      "KNkwcYwSv6vp1yrH5SnpBs:13:47",              // File:Conditional Area component set
      "S:KNkwcYwSv6vp1yrH5SnpBs,1:14",             // Published Page component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,2:33",             // Published Page Stack component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,3:54",             // Published File component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,4:8",              // Published Concurrent component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,5:30",             // Published Continuation Point component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,5:48",             // Published Area of Commonality component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,7:130",            // Published Flow Area component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,8:8",              // Published Decision Point component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,8:29",             // Published Conditional Branch component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,9:8",              // Published Conditional Selector component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,12:8",             // Published Cluster component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,13:47"             // Published Conditional Area component set format
    ];
    
    let importSuccess = false;
    
    for (const keyFormat of keyFormats) {
      try {
        console.log(`🔍 Trying key format: "${keyFormat}"`);
        
        // Try component set import first (for formats that might be component sets)
        if (keyFormat.includes("1:14") || keyFormat.includes("2:33") || keyFormat.includes("3:54") || keyFormat.includes("4:8") || keyFormat.includes("5:30") || keyFormat.includes("5:48") || keyFormat.includes("7:130") || keyFormat.includes("8:8") || keyFormat.includes("8:29") || keyFormat.includes("9:8") || keyFormat.includes("12:8") || keyFormat.includes("13:47")) {
          try {
            console.log(`  Trying as component set...`);
            const importedComponentSet = await figma.importComponentSetByKeyAsync(keyFormat);
            node = importedComponentSet.defaultVariant.createInstance();
            console.log(`✅ SUCCESS! Component set imported with key: "${keyFormat}"`);
            figma.notify(`Inserted: ${component.name} component set - Key: ${keyFormat}`);
            importSuccess = true;
            break;
          } catch (setError) {
            console.log(`  Component set import failed: ${setError}`);
          }
        }
        
        // Try regular component import
        const importedComponent = await figma.importComponentByKeyAsync(keyFormat);
        node = importedComponent.createInstance();
        console.log(`✅ SUCCESS! Component imported with key: "${keyFormat}"`);
        figma.notify(`Inserted: ${component.name} - Key: ${keyFormat}`);
        importSuccess = true;
        break;
        
      } catch (importError) {
        console.log(`❌ Failed with "${keyFormat}": ${importError}`);
        continue;
      }
    }
    
    if (!importSuccess) {
      console.log('❌ All key formats failed');
      figma.notify(`Could not import ${component.name} - All key formats failed`);
      return;
    }
    
    // Position the node
    if (node) {
      if (position) {
        node.x = position.x - node.width / 2;
        node.y = position.y - node.height / 2;
      } else {
        node.x = figma.viewport.center.x - node.width / 2;
        node.y = figma.viewport.center.y - node.height / 2;
      }
      
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);
    }
    
  } catch (error) {
    figma.notify(`Error inserting component: ${error}`);
    console.error('Insert error:', error);
  }
}

async function createPagePlaceholder(component: Component): Promise<SceneNode> {
  // Create a styled placeholder that looks like the JJG Page component
  const rect = figma.createRectangle();
  rect.name = component.name;
  rect.resize(120, 80);
  
  // Style to match JJG Visual Vocabulary Page component
  rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White fill
  rect.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // Black border
  rect.strokeWeight = 2;
  rect.cornerRadius = 4;
  
  // Add text label
  const text = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  text.characters = "Page";
  text.fontSize = 12;
  text.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
  // Center the text
  text.x = rect.x + (rect.width - text.width) / 2;
  text.y = rect.y + (rect.height - text.height) / 2;
  
  // Group them together
  const group = figma.group([rect, text], figma.currentPage);
  group.name = component.name;
  
  return group;
}

async function createPlaceholderShape(component: Component): Promise<SceneNode> {
  // Create placeholder shapes based on component type
  switch (component.key) {
    case 'page':
    case 'page-stack':
      return await createPageStateShape();
    case 'decision-point':
      return await createDecisionShape();
    case 'start-end':
      return await createStartEndShape();
    case 'process':
      return await createProcessShape();
    case 'document':
      return await createDocumentShape();
    case 'database':
      return await createDatabaseShape();
    default:
      return await createPageStateShape();
  }
}

async function handleDrop(event: DropEvent) {
  if (selectedComponent) {
    await insertComponentInstance(selectedComponent, {
      x: event.absoluteX,
      y: event.absoluteY
    });
  }
}

// Shape creation functions (placeholders for actual library components)
async function createPageStateShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Page / State';
  frame.resize(170, 120);
  frame.cornerRadius = 8;
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  frame.strokeWeight = 2;
  
  const text = figma.createText();
  text.characters = 'Page / State';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 16;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(text);
  return frame;
}

async function createDecisionShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Decision';
  frame.resize(180, 180);
  frame.fills = [];
  
  const diamond = figma.createPolygon();
  diamond.pointCount = 4;
  diamond.resize(160, 160);
  diamond.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  diamond.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  diamond.strokeWeight = 2;
  diamond.x = 10;
  diamond.y = 10;
  
  const text = figma.createText();
  text.characters = 'Decision';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 14;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(diamond);
  frame.appendChild(text);
  return frame;
}

async function createStartEndShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Start / End';
  frame.resize(140, 140);
  frame.fills = [];
  
  const circle = figma.createEllipse();
  circle.resize(120, 120);
  circle.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  circle.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  circle.strokeWeight = 2;
  circle.x = 10;
  circle.y = 10;
  
  const text = figma.createText();
  text.characters = 'Start';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 14;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(circle);
  frame.appendChild(text);
  return frame;
}

async function createProcessShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Process';
  frame.resize(170, 100);
  frame.cornerRadius = 4;
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  frame.strokeWeight = 2;
  
  const text = figma.createText();
  text.characters = 'Process';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 16;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(text);
  return frame;
}

async function createDocumentShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Document';
  frame.resize(140, 160);
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  frame.strokeWeight = 2;
  frame.cornerRadius = 4;
  
  const text = figma.createText();
  text.characters = 'Document';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 14;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(text);
  return frame;
}

async function createDatabaseShape(): Promise<FrameNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const frame = figma.createFrame();
  frame.name = 'Database';
  frame.resize(120, 160);
  frame.fills = [];
  
  // Create cylinder shape using ellipses and rectangle
  const topEllipse = figma.createEllipse();
  topEllipse.resize(100, 30);
  topEllipse.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  topEllipse.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  topEllipse.strokeWeight = 2;
  topEllipse.x = 10;
  topEllipse.y = 10;
  
  const rect = figma.createRectangle();
  rect.resize(100, 100);
  rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  rect.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  rect.strokeWeight = 2;
  rect.x = 10;
  rect.y = 25;
  
  const bottomEllipse = figma.createEllipse();
  bottomEllipse.resize(100, 30);
  bottomEllipse.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  bottomEllipse.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  bottomEllipse.strokeWeight = 2;
  bottomEllipse.x = 10;
  bottomEllipse.y = 110;
  
  const text = figma.createText();
  text.characters = 'Database';
  text.fontName = { family: 'Inter', style: 'Regular' };
  text.fontSize = 12;
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  text.textAlignHorizontal = 'CENTER';
  text.textAlignVertical = 'CENTER';
  text.resize(frame.width, frame.height);
  
  frame.appendChild(rect);
  frame.appendChild(topEllipse);
  frame.appendChild(bottomEllipse);
  frame.appendChild(text);
  return frame;
}