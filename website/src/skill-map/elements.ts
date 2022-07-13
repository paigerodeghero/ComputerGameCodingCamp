import { Edge, Node } from "react-flow-renderer";

const position = { x: 0, y: 0 };

const nodes = {
  whatIsGodot: {
    id: "what-is-godot",
    type: "skillTreeNode",
    data: {
      title: "What is Godot?",
      description: "This video introduces you to Godot and where you can find Godot to download. ",
      videoLink: "https://youtu.be/QC5t30ayZ60"
    },
    position: position,
  },
  navigatingMacFileSystem: {
    id: "navigating-mac-file-system",
    type: "skillTreeNode",
    data: {
      title: "Navigating the Mac File System",
      description: 'In this video we show you where you can find files and your downloads folder on a Mac.',
      videoLink: 'https://youtu.be/E2dtsNqDVl0'
    },
    position: position,
  },
  navigatingWindowsFileSystem: {
    id: "navigating-windows-file-system",
    type: "skillTreeNode",
    data: {
      title: "Navigating the Windows File System",
      description: `In this video we show you how to find and navigate to the Windows File System. This is where your downloads will go if you need to download any camp materials.`,
      videoLink: 'https://youtu.be/AGF_awYc8cE'
    },
    position: position,
  },
  settingUpProjectEnvironment: {
    id: "setting-up-project-environment",
    type: "skillTreeNode",
    data: {
      title: "Setting Up Your Project Environment",
      videoLink: 'https://youtu.be/hzakjtCwLwY',
      description: 'In this video we teach you the basics of getting started with Godot - from importing assets and projects to different panels you will need to be familiar with.'
    },
    position: position,
  },
  openingAnExistingProject: {
    id: 'opening-an-existing-project',
    type: 'skillTreeNode',
    data: {
      title: "Opening an Existing Project",
      description: 'In this video we show you how to download and open an existing Godot project or game.',
      videoLink: 'https://youtu.be/CWaDqEu8Ufs'
    },
    position
  },
  importingCharacter: {
    id: "importing-character",
    type: "skillTreeNode",
    data: {
      title: "Importing a Character",
      description: "In this video we will show you how to import a character from Piskel App into Godot.",
      videoLink: 'https://youtu.be/DStfvcU1zCE'
    },
    position: position,
  },
  characterMovement: {
    id: "character-movement",
    type: "skillTreeNode",
    data: {
      title: "Character Movement",
      description: "In this video we show you how to map peripheral inputs into character movement in Godot.",
      videoLink: 'https://youtu.be/16rwYsKSPo8'
    },
    position,
  },
  creatingObstacles: {
    id: "creating-obstacles",
    type: "skillTreeNode",
    data: {
      title: "Creating Obstacles",
      description: "In this video we show you how to import a sprite and make an obstacle in Godot",
      videoLink: 'https://youtu.be/S0O3ZEx3dYU'
    },
    position,
  },
  obstacleCollision: {
    id: "obstacle-collision",
    type: "skillTreeNode",
    data: {
      title: "Obstacle Collision",
      description: `In this video we show you the basics to adding collision boxes to objects and sprites in Godot.`,
      videoLink: "https://youtu.be/Z0BX403hJPE"
    },
    position,
  },
  keepingScore: {
    id: "keeping-score",
    type: "skillTreeNode",
    data: {
      title: "Keeping Score",
      description: "In this video we show you how to implement basic score keeping in Godot",
      videoLink: 'https://youtu.be/pzXJTVdxLdo'
    },
    position,
  },
  addingScore: {
    id: 'adding-score',
    type: 'skillTreeNode',
    data: {
      title: "Adding Score",
      description: 'In this video we show you how to implement basic score keeping in Godot',
      videoLink: 'https://youtu.be/pzXJTVdxLdo'
    },
    position
  },
  explosions: {
    id: "Explosions",
    type: "skillTreeNode",
    data: {
      title: "Explosions 💥",
      description: "In this video we walk you through the steps to a basic explosion in Godot.",
      videoLink: 'https://youtu.be/upWUXmBNBwM'
    },
    position,
  },
  dying: {
    id: "Dying",
    type: "skillTreeNode",
    data: {
      title: 'Dying',
      description: "Challenge: see signal video and attempt to make this work.",
    },
    position,
  },
  sideScrolling: {
    id: "SideScrolling",
    type: "skillTreeNode",
    data: {
      title: "Side Scrolling",
      description: 'In this video we show you have to make a scrolling background in Godot',
      videoLink: 'https://youtu.be/Ambm7PAsLuo'
    },
    position
  },
  signals: {
    id: "Signals",
    type: "skillTreeNode",
    data: {
      title: "Signals in Godot",
      description: 'In this video we teach you what signals are, why they are used, and how to implement them in a game feature.',
      videoLink: 'https://youtu.be/w3T0HZ3qrDA'
    },
    position
  },
  font: {
    id: 'font',
    type: 'skillTreeNode',
    data: {
      title: 'Font',
      videoLink: 'https://youtu.be/vq1DVGcj2TI',
      description: 'In this video we show you how to change the font for UI elements.'
    },
    position
  },
  uiContainers: {
    id: 'ui-containers',
    type: 'skillTreeNode',
    data: {
      title: 'Font',
      description: 'In this video we show you how to make UI container that can be used in many aspects of your game',
      videoLink: 'https://youtu.be/YZcFginaBKE'
    },
    position
  },
  pausing: {
    id: 'pausing',
    type: 'skillTreeNode',
    data: {
      title: 'pausing',
      description: '',
      videoLink: '',
    },
    position
  },
  obstacleSpawning: {
    id: 'obstacle-spawning',
    type: 'skillTreeNode',
    data: {
      title: "obstacleSpawning",
      videoLink: 'https://youtu.be/BckKx2_igkY',
      description: 'In this video we cover basic object spawning in Godot.'
    },
    position
  },
  gameTypes: {
    id: 'game-types',
    type: 'skillTreeNode',
    data: {
      title: 'Game Types',
      videoLink: 'https://youtu.be/Y--BZvRrLqk',
      description: 'In this video, we describe the different types and genres of games',
    },
    position
  },
  gameStoryTypes: {
    id: 'game-story-types',
    type: 'skillTreeNode',
    data: {
      title: 'Game Story Types',
      description: 'In this video we give you an overview of the different types of storys games can have to help you start planning your own game!',
      videoLink: 'https://youtu.be/lLVJc61x4rc',
    },
    position
  },
  backgroundImage: {
    id: 'background-image',
    type: 'skillTreeNode',
    data: {
      title: "Background Image",
      description: 'In this video we walk you through the steps to adding a background to your game in Godot!',
      videoLink: 'https://youtu.be/qjItneNjrI8'
    },
    position
  },
  animation: {
    id: 'animation',
    type: 'skillTreeNode',
    data: {
      title: 'Animation',
      description: 'In this video we show you how to animate a sprite in Godot',
      videoLink: 'https://youtu.be/pagBC8wGXwM'
    },
    position
  },
  addingSounds: {
    id: "adding-sounds",
    type: 'skillTreeNode',
    data: {
      title: 'Adding Sounds',
      description: 'In this video we show you how to add sound effects for your game!',
      videoLink: 'https://youtu.be/gKfOsjc9RDs'
    },
    position
  },
  buildingAndSharingGames: {
    id: 'building-and-sharing-games',
    type: 'skillTreeNode',
    data: {
      title: 'Building and Sharing Games',
      description: 'In this video we show you how to export and share your game from Godot.',
      videoLink: 'https://youtu.be/8A3vUa4li3Y'
    },
    position,
  }
};

export const initialNodes: Node[] = [...Object.values(nodes)];

const makeEdgeId = (a: Node, b: Node) => a.id + "___" + b.id;

const makeConnection = (a: Node, b: Node): Edge => ({
  id: makeEdgeId(a, b),
  source: a.id,
  target: b.id,
})

export const initialEdges: Edge[] = [
  makeConnection(nodes.whatIsGodot, nodes.navigatingMacFileSystem),
  makeConnection(nodes.whatIsGodot, nodes.navigatingWindowsFileSystem),
  makeConnection(nodes.navigatingMacFileSystem, nodes.settingUpProjectEnvironment),
  makeConnection(nodes.navigatingWindowsFileSystem, nodes.settingUpProjectEnvironment),
  makeConnection(nodes.settingUpProjectEnvironment, nodes.openingAnExistingProject),
  makeConnection(nodes.openingAnExistingProject, nodes.importingCharacter),
  makeConnection(nodes.importingCharacter, nodes.characterMovement),
  makeConnection(nodes.characterMovement, nodes.creatingObstacles),
  makeConnection(nodes.creatingObstacles, nodes.obstacleCollision),
  makeConnection(nodes.obstacleCollision, nodes.keepingScore),
  makeConnection(nodes.keepingScore, nodes.addingScore),
  makeConnection(nodes.addingScore, nodes.explosions),
  makeConnection(nodes.explosions, nodes.dying),

  makeConnection(nodes.dying, nodes.sideScrolling),
  makeConnection(nodes.sideScrolling, nodes.buildingAndSharingGames),
  makeConnection(nodes.dying, nodes.signals),

  makeConnection(nodes.characterMovement, nodes.signals),
  makeConnection(nodes.signals, nodes.font),
  makeConnection(nodes.font, nodes.uiContainers),
  makeConnection(nodes.uiContainers, nodes.pausing),
  makeConnection(nodes.pausing, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.obstacleSpawning),
  makeConnection(nodes.characterMovement, nodes.obstacleSpawning),
  makeConnection(nodes.obstacleSpawning, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.gameTypes),
  makeConnection(nodes.characterMovement, nodes.gameTypes),
  makeConnection(nodes.gameTypes, nodes.gameStoryTypes),
  makeConnection(nodes.gameStoryTypes, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.backgroundImage),
  makeConnection(nodes.characterMovement, nodes.backgroundImage),
  makeConnection(nodes.backgroundImage, nodes.buildingAndSharingGames),
  
  makeConnection(nodes.dying, nodes.animation),
  makeConnection(nodes.characterMovement, nodes.animation),
  makeConnection(nodes.animation, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.addingSounds),
  makeConnection(nodes.characterMovement, nodes.addingSounds),
  makeConnection(nodes.addingSounds, nodes.buildingAndSharingGames),
];
