import { Edge, Node } from "react-flow-renderer";

const position = { x: 0, y: 0 };

const nodes = {
  whatIsGodot: {
    id: "what-is-godot",
    type: "skillTreeNode",
    data: {
      title: "What is Godot?",
      description: "An overview of what godot is",
    },
    position: position,
  },
  navigatingMacFileSystem: {
    id: "navigating-mac-file-system",
    type: "skillTreeNode",
    data: {
      title: "Navigating the Mac File System",
    },
    position: position,
  },
  navigatingWindowsFileSystem: {
    id: "navigating-windows-file-system",
    type: "skillTreeNode",
    data: {
      title: "Navigating the Windows File System",
    },
    position: position,
  },
  settingUpProjectEnvironment: {
    id: "setting-up-project-environment",
    type: "skillTreeNode",
    data: {
      title: "Setting Up Your Project Environment",
    },
    position: position,
  },
  importingCharacter: {
    id: "importing-character",
    type: "skillTreeNode",
    data: {
      title: "Importing a Character",
      description: "How to import a character into godot",
    },
    position: position,
  },
  usingVsCode: {
    id: "using-vs-code",
    type: "skillTreeNode",
    data: {
      title: "Using VS Code",
      description: "How to set up and use VS code with Godot",
    },
    position,
  },
  characterMovement: {
    id: "character-movement",
    type: "skillTreeNode",
    data: {
      title: "Character Movement",
      description: "How to move your character on the screen",
    },
    position,
  },
  sceneMovement: {
    id: "scene-movement",
    type: "skillTreeNode",
    data: {
      title: "Scene Movement",
    },
    position,
  },
  creatingObstacles: {
    id: "creating-obstacles",
    type: "skillTreeNode",
    data: {
      title: "Creating Obstacles",
      description: "how to create obstacles in Godot",
    },
    position,
  },
  obstacleCollision: {
    id: "obstacle-collision",
    type: "skillTreeNode",
    data: {
      title: "Obstacle Collision",
      description:
        "How to prevent your character from walking through an obstacle",
    },
    position,
  },
  keepingScore: {
    id: "keeping-score",
    type: "skillTreeNode",
    data: {
      title: "Keeping Score",
      description: "How to keep score in your game",
    },
    position,
  },
  keepingLives: {
    id: "keeping-lives",
    type: "skillTreeNode",
    data: {
      title: "Keeping Lives",
      description: "How to keep lives in your game",
    },
    position,
  },
  explosions: {
    id: "Explosions",
    type: "skillTreeNode",
    data: {
      title: "Explosions 💥",
      description: "How to create explosions in your game",
    },
    position,
  },
  shooting: {
    id: "Shooting",
    type: "skillTreeNode",
    data: {
      title: "Shooting",
      description: "How to introduce shooting into your game",
    },
    position,
  },
  dying: {
    id: "Dying",
    type: "skillTreeNode",
    data: {
      title: 'Dying',
      description: "how to make your character die in the game",
    },
    position,
  },
  sideScrolling: {
    id: "SideScrolling",
    type: "skillTreeNode",
    data: {
      title: "Side Scrolling",
    },
    position
  },
  signals: {
    id: "Signals",
    type: "skillTreeNode",
    data: {
      title: "Signals in Godot",
    },
    position
  },
  uiAndPausing: {
    id: "ui-and-pausing",
    type: "skillTreeNode",
    data: {
      title: "UI & Pausing"
    },
    position
  },
  obstacleSpawning: {
    id: 'obstacle-spawning',
    type: 'skillTreeNode',
    data: {
      title: "obstacleSpawning"
    },
    position
  },
  additionalFeatures: {
    id: "additional-features",
    type: 'skillTreeNode',
    data: {
      title: 'Additional Features',
    },
    position,
  },
  gameStoryLine: {
    id: 'game-storyline',
    type: 'skillTreeNode',
    data: {
      title: 'Game Storyline'
    },
    position
  },
  backgroundImage: {
    id: 'background-image',
    type: 'skillTreeNode',
    data: {
      title: "Background Image"
    },
    position
  },
  animation: {
    id: 'animation',
    type: 'skillTreeNode',
    data: {
      title: 'Animation'
    },
    position
  },
  gameOverUi: {
    id: "game-over-ui",
    type: 'skillTreeNode',
    data: {
      title: 'gameOverUi'
    },
    position
  },
  addingSounds: {
    id: "adding-sounds",
    type: 'skillTreeNode',
    data: {
      title: 'Adding Sounds'
    },
    position
  },
  gameLevels: {
    id: 'game-levels',
    type: 'skillTreeNode',
    data: {
      title: 'Game Levels'
    },
    position
  },
  buildingAndSharingGames: {
    id: 'building-and-sharing-games',
    type: 'skillTreeNode',
    data: {
      title: 'Building and Sharing Games'
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
  makeConnection(nodes.settingUpProjectEnvironment, nodes.importingCharacter),
  makeConnection(nodes.importingCharacter, nodes.usingVsCode),
  makeConnection(nodes.usingVsCode, nodes.characterMovement),
  makeConnection(nodes.characterMovement, nodes.creatingObstacles),
  makeConnection(nodes.creatingObstacles, nodes.obstacleCollision),
  makeConnection(nodes.obstacleCollision, nodes.keepingScore),
  makeConnection(nodes.keepingScore, nodes.keepingLives),
  makeConnection(nodes.keepingLives, nodes.explosions),
  makeConnection(nodes.explosions, nodes.shooting),
  makeConnection(nodes.shooting, nodes.dying),
  makeConnection(nodes.characterMovement, nodes.sceneMovement),

  makeConnection(nodes.dying, nodes.sideScrolling),
  makeConnection(nodes.sideScrolling, nodes.buildingAndSharingGames),
  makeConnection(nodes.dying, nodes.signals),

  makeConnection(nodes.sceneMovement, nodes.signals),
  makeConnection(nodes.signals, nodes.uiAndPausing),
  makeConnection(nodes.uiAndPausing, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.obstacleSpawning),
  makeConnection(nodes.sceneMovement, nodes.obstacleSpawning),
  makeConnection(nodes.obstacleSpawning, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.additionalFeatures),
  makeConnection(nodes.sceneMovement, nodes.additionalFeatures),
  makeConnection(nodes.additionalFeatures, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.gameStoryLine),
  makeConnection(nodes.sceneMovement, nodes.gameStoryLine),
  makeConnection(nodes.gameStoryLine, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.backgroundImage),
  makeConnection(nodes.sceneMovement, nodes.backgroundImage),
  makeConnection(nodes.backgroundImage, nodes.buildingAndSharingGames),
  
  makeConnection(nodes.dying, nodes.animation),
  makeConnection(nodes.sceneMovement, nodes.animation),
  makeConnection(nodes.animation, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.gameOverUi),
  makeConnection(nodes.sceneMovement, nodes.animation),
  makeConnection(nodes.animation, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.addingSounds),
  makeConnection(nodes.sceneMovement, nodes.addingSounds),
  makeConnection(nodes.addingSounds, nodes.buildingAndSharingGames),

  makeConnection(nodes.dying, nodes.gameLevels),
  makeConnection(nodes.sceneMovement, nodes.gameLevels),
  makeConnection(nodes.gameLevels, nodes.buildingAndSharingGames)
];
