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
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/4Uq/igb/gbfAz2s4YF51Gq6g/30_846.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7f12a011456ddbaf9ce53a4994ea2d03772c33ca10c787fcf92c2fbe59645fc4"
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
      description: "Page Stack\n\nUse a pagestack to indicate a group of functionally identical pages whose navigational properties are immaterial to the macrostructure of the site.",
      category: "Pages",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/iHD/ni5/XjwUQwAybpSFjA1v/2_32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1705e2336d7ac94d455650944c1e569f0886213cc5f9d035dca6145b55f96142"
    },
    {
      key: "a413a758807811855ffc1c4aeb12b29797bef1ef",
      name: "File",
      description: "Files\n\nFiles, parcels of data without navigational properties, are delivered to the user for use outside a Web browser environment (such as audio or video files, stand-alone documents like PDFs, or executables). For these, we use our old friend the dog-eared document icon.\n\nWe use labels on pages and files to identify them. These don't need to correlate to actual designations such as HTML <TITLE> elements or filenames, but they do need to be unique for each page or file in the diagram. Unique numeric identifiers and type designations also provide a good way to keep track of all the pages and files in your diagram.",
      category: "Data Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/bJp/K8l/2Kcu2Y9qbqjD85o4/3_41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=65497369c1dc5f2b3150be619c8299742a8ba243b8053e3000ed9ae0eb0781d7"
    },
    {
      key: "dff8611e47e4a61cca725b3c68dbcfec8defe390",
      name: "Decision Point",
      description: "Making choices: decision points\n\nWhen one user action may generate one of a number of results, the system must make a decision about which result is to be presented. (Perhaps the most common example of this is error handling on form submission.) We call this a decision point, and as in traditional flow charts, it is represented by a diamond.\n\nNote that arrows must be used in conjunction with decision points to clarify whether associated elements are upstream or downstream from the decision point.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/7Vl/gqg/NIPH1iqnZkgEYH9A/8_6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=19f98fbe06129c56dac80c290bef793d8e4a36b85a7039f92346e968a220c475"
    },
    {
      key: "ee4ae413a392a51f22ca8936ef0182f0389c9b52",
      name: "Conditional Branch",
      description: "Multiple Choice: conditional branch\n\nWhen the system must select one path among a number of mutually exclusive options to be presented to the user, we use a conditional branch (triangle). Upstream elements connect to one point of the triangle; downstream elements connect to the opposite side.\n\nThe conditional branch indicates that the system is deciding which path will be presented to the user. The paths from page A to pages B, C, and D are mutually exclusive; for example, if a path to B exists, paths to C and D do not.\n\nAs with conditional connectors and arrows, a conditional branch may provide the user with no path at all (a null result). The difference here is that with a conditional branch a null result may not be permitted at all; and if it is permitted, it is one of three or more possible results. Indicate whether the branch permits a null result in your footnote or appendix entry.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/F64/Akk/1g0KhP8XFK5q86kj/8_28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=df0af99c0442c842487e4639676c2a3f047e3efe071755f508d3cbf2df5ab724"
    },
    {
      key: "89d66eddba9e39872b4867c8022db9723fd70241",
      name: "Conditional Selector",
      description: "Choose one or more: conditional selectors\n\nThe conditional selector element (represented by a trapezoid) functions much like the conditional branch, with one important difference: with the selector, the various downstream paths are not mutually exclusive. any number of the paths that fulfill the condition(s) may be presented to the user.\n\nThe most common application of the conditional selector is in results generated by a search engine. In this case, the search results page would appear upstream from the selector; the condition is the search criteria input by the user; the downstream paths would lead to the content pages indexed by the search engine. As with a conditional branch, a conditional selector may generate a null result -- in fact, this is far more common with a selector than with a branch.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/0AJ/XqM/PhpXKtyydc0NX6kE/9_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1905fde88dcca35c070c3a53157ef23de1fce8ae93faaba5d08e471ad2cd1f46"
    },
    {
      key: "2bb4fbc62e5e1f8cbdb8f92cccc3d92028a5b8fb",
      name: "Cluster",
      description: "One decision, many paths: clusters\n\nSome conditional structures require that the system present more than one path based upon certain conditions. We associate these paths together in the structure with a cluster (represented by a circle). The cluster can appear downstream from either a conditional branch or a conditional selector.\n\nThe structure illustrated in Figure 14 functions pretty much like a normal conditional branch, but for one condition we are presenting more than one path to the user. So if the attribute being evaluated has value x, the user sees a path to page B; but if the attribute has value y, the user sees paths to both page C and page D.",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/TPu/yWL/Eofz9x1sO8h6ePzE/12_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1b81ad0a2c7a9f397ca066ca5281e74c212986072a0a3b575d5889d269f5fc23"
    },
    {
      key: "a78a0847b39481f4c8fde57153035680a28e1d93",
      name: "Area of Commonality",
      description: "Commonalities: areas and iterative areas\n\nThe area element (a rounded-corner rectangle) is used to identify a group of pages that share one or more common attributes (such as appearing in a pop-up window, or having some unique design treatment). Use labels to identify these attributes or (as with connectors), refer to notes elsewhere in the document if you have a lot to say.\n\nNote that connectors and arrows don't actually point to the areas themselves. The area elements serve only to enclose the pages. Areas should be applied carefully -- it's very easy to get caught up capturing all kinds of details with area elements that don't manifest in the user experience (such as which pages are hosted on which servers) or otherwise interfere with the diagram's overall objective of communicating the macrostructure.",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/qbb/dG6/rvzpvxCz0L9EbxYp/5_44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d3df0ba53bbe4361131f32e8e43db96461a868c3ddc4a057de10b0f09cf61d86"
    },
    {
      key: "fbf58fb33deb7fd0d82200d695c1a3c6fedd3f76",
      name: "Conditional Area",
      description: "Some restrictions may apply: conditional areas\n\nWhen one or more conditions applies to a group of pages, those pages are enclosed within a conditional area -- a rounded-corner rectangle like a standard area, but with the dashed-line treatment of a conditional connector.\n\nConditional areas are applied most commonly in situations involving access permissions, such as when a valid login or encrypted (SSL) connection is required. Unlike the other types of areas, conditional areas are associated with a result, which is generated in the event that the condition(s) are not fulfilled.",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/ysl/QTp/ftZO2ZK2VMG0Ek9Q/13_46.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d37240eaed376c439c30a597d4f1ca20bf955f6222e2e339bb200695f19ec5e0"
    },
    {
      key: "77b847931af9bbd88eefcdb97b98c9a2d8e3817c",
      name: "Flow Area",
      description: "Reusable components: flow areas and references\n\nSome interaction designs require a sequence of steps (like a login procedure, for instance) to appear repeatedly in different contexts throughout the design. Often these sequences are merely a component of one or more larger tasks the user is trying to accomplish. (This is analogous to the concept of a subroutine in computer programming.)\n\nSuch a reusable sequence is called a flow, and it is represented in the diagram through two elements: the flow area, which encloses the flow itself; and the flow reference, which serves as a sort of \"placeholder\" for the flow in every context in which it is repeated. Both elements have the same basic shape, a rectangle with the corners clipped off (or, if you prefer, a distorted octagon).",
      category: "Grouping Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/Txp/opG/TE5bdAtfz9QxAN4J/7_128.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=32ffd22d8a67f3bf2fd9af8ec3462914202600daf0255ae080e5f63e5c78a464"
    },
    {
      key: "34ebe982289aaa7c1741b7e42f648b1d635e63c1",
      name: "Concurrent",
      description: "Concurrent Set\n\nA concurrent set is used in cases where a user action generates multiple, simultaneous results (such as spawning a pop-up window at the same time a page is loaded in the main window, or displaying a page while a file is being downloaded).",
      category: "Logic Elements",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/hRm/0rn/4RDIGpslVfh3Vzni/4_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6a1730074204297fd2aacbb8fe7048742f4ba051ea85a872a646c220bcec0a92"
    },
    {
      key: "4c59b0310f2bce552f24fe009cb307697b87dfe7",
      name: "Continuation Point",
      description: "Breaking it up: continuation points\n\nInformation architects often find themselves yearning for ever-larger sheets of paper on which to diagram their work. But even if large-format output devices such as plotters were widely available, some architectures are simply too complex to capture in a single, all-encompassing diagram.\n\nTo allow us to separate our diagrams into easily digestible sections, we use continuation points (square brackets) to bridge the gaps between pages.\n\nA single continuation point may list one or more sources or destinations as needed. The orientation of the brackets (horizontal or vertical) carries no particular meaning; the choice of orientation is a matter of the architect's aesthetic judgment.",
      category: "References",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/Vtl/l4n/NlcQzNoqMKgCiop7/5_29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=921e158f310c58def756ad4147539bc45398ce17785d788f240821bc0b53aa22"
    },
    {
      key: "4ef2f4008f3814c054157f70a2f0605be8e6ffd4",
      name: "Relational Connector",
      description: "Creating relationships: connectors\n\nRelationships between elements are depicted with simple lines or connectors. These conceptual relationships will inevitably translate into navigational relationships -- but not all navigational relationships will appear in the diagram.\n\nIn the case of information architecture, these relationships are commonly reflected through a hierarchical organization of pages into trees. However, this is by no means required or even (in some cases) recommended.\n\nConnector Labels\n\nConnectors and arrows can also be labeled, but the use of these should be limited to cases in which the action taken by the user needs to be clarified. If the labels become long and unwieldy and start to clutter the diagram, point the reader toward a footnote or appendix entry.",
      category: "Connectors",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/KvZ/pIt/7xgn0fI2ihJ3XgOL/32_18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f8a50f814262805ed3371aa70b27b0399a28b072bc922e1ec9ac5ee275e3c3e7"
    },
    {
      key: "7894e41094be26500071ab58ca7c61ac07c22ce3",
      name: "Relational Connector (Conditional)",
      description: "Relational Connector (Conditional)\n\nA conditional relational connector that shows relationships between elements that depend on specific conditions or criteria.\n\nThis symbol represents connections where the relationship exists only under certain circumstances, such as conditional associations, context-dependent links, or state-based relationships.",
      category: "Connectors",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/cwR/0bv/E86svaDsazohxO1m/32_73.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d18a2dd73d04dbfe8d3ff3c21a7d21d45548181dbafdcf7a2d637290cde434f2"
    },
    {
      key: "41f4b8cf5e6663ad6b2eca298cf1f039266ecc69",
      name: "Directional Connector",
      description: "Creating relationships: arrows\n\nWhen diagramming interaction design, our connectors also need to convey directionality to indicate how the user will move through the system toward completion of a particular task. Turning our connectors into arrows will do the trick nicely. We use the terms downstream and upstream to refer to the position of elements relative to this forward movement.\n\nNote that these arrows are not like the arrows indicating a one-way street, but rather like the arrows indicating the way to the food court in the mall. The user is not prohibited from moving in the opposite direction; the arrow merely indicates the direction in which the user is likely to want to go.\n\nConnector Labels\n\nConnectors and arrows can also be labeled, but the use of these should be limited to cases in which the action taken by the user needs to be clarified. If the labels become long and unwieldy and start to clutter the diagram, point the reader toward a footnote or appendix entry.",
      category: "Connectors",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/heP/KQG/m1SXz34Y26bsCU3u/32_54.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7bbaa9991ad3e49fccf0137c120f2b5ff724ef436b17e18216ed008ce9cb0002"
    },
    {
      key: "248528c0e9e36611c3b7f4212fc3d35831b688b5",
      name: "Directional Connector (Conditional)",
      description: "Directional Connector (Conditional)\n\nA conditional directional connector that shows flow or movement that occurs only under specific conditions.\n\nThis symbol represents directed relationships that depend on certain criteria being met, such as conditional navigation, state-dependent flows, or decision-based routing between elements.",
      category: "Connectors",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/QZu/jmF/zR4ZOo8XMzu8mL44/34_20.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bd1d6b4e36810e59af6608394188c2c93b802b22a7183d41e59e8fe36acaeceb"
    },
    {
      key: "735e1ac5aabffbaf0f9cdbbc07280daff971d4d0",
      name: "Dir Conn (No Upstream)",
      description: "Creating relationships: arrows\n\nIf for some reason we want to prohibit this upstream movement (such as in cases where some irreversible action like deleting a record has taken place), we use a crossbar (just a short perpendicular line) on the opposite end of the arrow to indicate this.\n\nConnector Labels\n\nConnectors and arrows can also be labeled, but the use of these should be limited to cases in which the action taken by the user needs to be clarified. If the labels become long and unwieldy and start to clutter the diagram, point the reader toward a footnote or appendix entry.",
      category: "Connectors",
      thumbnail_url: "https://s3-alpha.figma.com/checkpoints/XMs/MRG/pM6OXFjvAxVkExJ8/35_22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWC6UK6QLJ2%2F20251002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251002T000000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5207b716a0a8b4bbfad06b0ad9a111170b582b5c92b73004926beead668a8850"
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
      "32:19",                                       // Relational Connector component set node ID
      "32:75",                                       // Relational Connector (Conditional) component set node ID
      "32:55",                                       // Directional Connector component set node ID
      "34:21",                                       // Directional Connector (Conditional) component set node ID
      "35:23",                                       // Dir Conn (No Upstream) component set node ID
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
      "KNkwcYwSv6vp1yrH5SnpBs:32:19",              // File:Relational Connector component set
      "KNkwcYwSv6vp1yrH5SnpBs:32:75",              // File:Relational Connector (Conditional) component set
      "KNkwcYwSv6vp1yrH5SnpBs:32:55",              // File:Directional Connector component set
      "KNkwcYwSv6vp1yrH5SnpBs:34:21",              // File:Directional Connector (Conditional) component set
      "KNkwcYwSv6vp1yrH5SnpBs:35:23",              // File:Dir Conn (No Upstream) component set
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
      "S:KNkwcYwSv6vp1yrH5SnpBs,13:47",            // Published Conditional Area component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,32:19",            // Published Relational Connector component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,32:75",            // Published Relational Connector (Conditional) component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,32:55",            // Published Directional Connector component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,34:21",            // Published Directional Connector (Conditional) component set format
      "S:KNkwcYwSv6vp1yrH5SnpBs,35:23"             // Published Dir Conn (No Upstream) component set format
    ];
    
    let importSuccess = false;
    
    for (const keyFormat of keyFormats) {
      try {
        console.log(`🔍 Trying key format: "${keyFormat}"`);
        
        // Try component set import first (for formats that might be component sets)
        if (keyFormat.includes("1:14") || keyFormat.includes("2:33") || keyFormat.includes("3:54") || keyFormat.includes("4:8") || keyFormat.includes("5:30") || keyFormat.includes("5:48") || keyFormat.includes("7:130") || keyFormat.includes("8:8") || keyFormat.includes("8:29") || keyFormat.includes("9:8") || keyFormat.includes("12:8") || keyFormat.includes("13:47") || keyFormat.includes("32:19") || keyFormat.includes("32:75") || keyFormat.includes("32:55") || keyFormat.includes("34:21") || keyFormat.includes("35:23")) {
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