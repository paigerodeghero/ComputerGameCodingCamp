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
  CreatingObstacles: {
    id: "creating-obstacles",
    type: "skillTreeNode",
    data: {
      title: "Creating Obstacles",
      description: "how to create obstacles in Godot",
    },
    position,
  },
  ObstacleCollision: {
    id: "obstacle-collision",
    type: "skillTreeNode",
    data: {
      title: "Obstacle Collision",
      description:
        "How to prevent your character from walking through an obstacle",
    },
    position,
  },
  KeepingScore: {
    id: "keeping-score",
    type: "skillTreeNode",
    data: {
      title: "Keeping Score",
      description: "How to keep score in your game",
    },
    position,
  },
  KeepingLives: {
    id: "keeping-lives",
    type: "skillTreeNode",
    data: {
      title: "Keeping Lives",
      description: "How to keep lives in your game",
    },
    position,
  },
  Explosions: {
    id: "Explosions",
    type: "skillTreeNode",
    data: {
      title: "Explosions 💥",
      description: "How to create explosions in your game",
    },
    position,
  },
  Shooting: {
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
  SideScrolling: {
    id: "SideScrolling",
    type: "skillTreeNode",
    data: {
      title: "Side Scrolling",
    },
    position
  },
  Signals: {
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
  {
    id: makeEdgeId(nodes.whatIsGodot, nodes.navigatingMacFileSystem),
    source: nodes.whatIsGodot.id,
    target: nodes.navigatingMacFileSystem.id,
  },
  {
    id: makeEdgeId(nodes.whatIsGodot, nodes.navigatingWindowsFileSystem),
    source: nodes.whatIsGodot.id,
    target: nodes.navigatingWindowsFileSystem.id,
  },
  {
    id: makeEdgeId(
      nodes.navigatingMacFileSystem,
      nodes.settingUpProjectEnvironment
    ),
    source: nodes.navigatingMacFileSystem.id,
    target: nodes.settingUpProjectEnvironment.id,
  },
  {
    id: makeEdgeId(
      nodes.navigatingWindowsFileSystem,
      nodes.settingUpProjectEnvironment
    ),
    source: nodes.navigatingWindowsFileSystem.id,
    target: nodes.settingUpProjectEnvironment.id,
  },
  {
    id: makeEdgeId(nodes.settingUpProjectEnvironment, nodes.importingCharacter),
    source: nodes.settingUpProjectEnvironment.id,
    target: nodes.importingCharacter.id,
  },
  {
    id: makeEdgeId(nodes.importingCharacter, nodes.usingVsCode),
    source: nodes.importingCharacter.id,
    target: nodes.usingVsCode.id,
  },
  {
    id: makeEdgeId(nodes.usingVsCode, nodes.characterMovement),
    source: nodes.usingVsCode.id,
    target: nodes.characterMovement.id,
  },
  {
    id: makeEdgeId(nodes.characterMovement, nodes.CreatingObstacles),
    source: nodes.characterMovement.id,
    target: nodes.CreatingObstacles.id,
  },
  {
    id: makeEdgeId(nodes.CreatingObstacles, nodes.ObstacleCollision),
    source: nodes.CreatingObstacles.id,
    target: nodes.ObstacleCollision.id,
  },
  {
    id: makeEdgeId(nodes.ObstacleCollision, nodes.KeepingScore),
    source: nodes.ObstacleCollision.id,
    target: nodes.KeepingScore.id,
  },
  {
    id: makeEdgeId(nodes.KeepingScore, nodes.KeepingLives),
    source: nodes.KeepingScore.id,
    target: nodes.KeepingLives.id,
  },
  {
    id: makeEdgeId(nodes.KeepingLives, nodes.Explosions),
    source: nodes.KeepingLives.id,
    target: nodes.Explosions.id,
  },
  {
    id: makeEdgeId(nodes.Explosions, nodes.Shooting),
    source: nodes.Explosions.id,
    target: nodes.Shooting.id,
  },
  {
    id: makeEdgeId(nodes.Shooting, nodes.dying),
    source: nodes.Shooting.id,
    target: nodes.dying.id,
  },
  {
    id: makeEdgeId(nodes.characterMovement, nodes.sceneMovement),
    source: nodes.characterMovement.id,
    target: nodes.sceneMovement.id,
  },
  {
    id: makeEdgeId(nodes.dying, nodes.SideScrolling),
    source: nodes.dying.id,
    target: nodes.SideScrolling.id
  },
  {
    id: makeEdgeId(nodes.SideScrolling, nodes.buildingAndSharingGames),
    source: nodes.SideScrolling.id,
    target: nodes.buildingAndSharingGames.id
  },
  {
    id: makeEdgeId(nodes.sceneMovement, nodes.SideScrolling),
    source: nodes.sceneMovement.id,
    target: nodes.SideScrolling.id,
  },
  {
    id: makeEdgeId(nodes.dying, nodes.Signals),
    source: nodes.dying.id,
    target: nodes.Signals.id
  },
  {
    id: makeEdgeId(nodes.sceneMovement, nodes.Signals),
    source: nodes.sceneMovement.id,
    target: nodes.Signals.id
  },
  {
    id: makeEdgeId(nodes.Signals, nodes.uiAndPausing),
    source: nodes.Signals.id,
    target: nodes.uiAndPausing.id
  },
  {
    id: makeEdgeId(nodes.uiAndPausing, nodes.buildingAndSharingGames),
    source: nodes.uiAndPausing.id,
    target: nodes.buildingAndSharingGames.id
  },
  {
    id: makeEdgeId(nodes.dying, nodes.obstacleSpawning),
    source: nodes.dying.id,
    target: nodes.obstacleSpawning.id
  },
  {
    id: makeEdgeId(nodes.sceneMovement, nodes.obstacleSpawning),
    source: nodes.sceneMovement.id,
    target: nodes.obstacleSpawning.id
  },
  {
    id: makeEdgeId(nodes.obstacleSpawning, nodes.buildingAndSharingGames),
    source: nodes.obstacleSpawning.id,
    target: nodes.buildingAndSharingGames.id
  },
  {
    id: makeEdgeId(nodes.dying, nodes.additionalFeatures),
    source: nodes.dying.id,
    target: nodes.additionalFeatures.id,
  },
  {
    id: makeEdgeId(nodes.sceneMovement, nodes.additionalFeatures),
    source: nodes.sceneMovement.id,
    target: nodes.addingSounds.id,
  },
  {
    id: makeEdgeId(nodes.additionalFeatures, nodes.buildingAndSharingGames),
    source: nodes.additionalFeatures.id,
    target: nodes.buildingAndSharingGames.id
  },
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
