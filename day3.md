
# Welcome to Day 3 of the Clemson Game Coding Camp!
##Day 3: Game Programming

### Introduction to MakeCode

Day 3: Ghosts and NPCs
  - ---- break ----

Nearly 3 hours of teaching.

      1. Teach kids how to download game to physical BrainPad device and play the game there. [https://www.brainpad.com/start-making/](https://www.brainpad.com/start-making/) (30 mins)
        - Go through what BrainPad is.
        - Find Pacman Game
        -
      2. Create a ghost and place him in the maze. (5 min + 10 min)
        - Drag &#39;set mySprite to sprite of kind player&#39; to on start.
        - Change mySprite to Clyde.
        - Change player to enemy.
        - Click on edit spite area.
        - Draw Clyde.
        - Duplicate &#39;place Pacman on top of tilemap col row&#39;.
        - Change Pacman to Clyde.
        - Set row to 4 and col to 5.
        - https://makecode.com/\_ao0YoARCxPq6
      3. Create random movement for the ghost. (10 min + 15 min)
        - Assign initial velocity to the ghost.
        - Drag out an on game update block.
          - Add record heading block to it for Pacman and for ghost. (hide this in a new on-game-update block?)
        - Check for collision with walls.
          - Explain sprite wholly within a tile block.
        - Find possible new directions to go in. All directions up for grabs.
        - Choose a random direction from that list.
        - https://makecode.com/\_i1CDXcTxiM7P
      4. Add a floating animation for ghost. (5 min + 10 min)
        - Add a new function &#39;animateClyde&#39;.
        - Add animation blocks.
        - Activate animation in on start.
        - https://makecode.com/\_2Y994k4bw2T7
      5. Add collision between Pacman and ghost. (2 min + 5 min)
        - Pacman dies and goes back to start.
        - Ghost goes back to start position.
        - Make sure you play a sound.
        - Engage students: How many lives should pacman have?
        - STPES
        - Add one life to Pacman in on start.
        - Create a new &#39;on sprite kind of player overlaps otherSprite of kind player&#39; block.
        - Change second player field to enemy.
        - Change life by -1 in the block.
        - Place Pacman and Clyde to starting position.
        - Play a cool sound.
        - https://makecode.com/\_azX0k7LyALh0
      6. Restore balance to game. (1 min + 2 min)
        - Remove go backwards from list of new directions for ghost to go in.
        - https://makecode.com/\_1gR8cjW9HKK6
      7. Create better AI for the ghost. (10 min + 15 min)
        - Turn not just at a collision with a wall, but at any new tile position.
        - Explain how to check for turning only when entering a new tile position after turning previously, else you&#39;ll spin in place.
        - Find possible new directions to go in.
        - Choose a random direction from that list.
        - https://makecode.com/\_011hVshPgYgf
      8. Bonce ghost back if stuck in tunnel. (2 min + 5 min)
        - Create a new function clydeStuck.
        - Check if clyde col is 0 and heading is 270, then.
        - Set clyde velocity to 50,0.
        - Check if clyde col is 15 and heading is 90, then.
        - Set clyde velocity to –50,0.
        - Call clydeStuck in clydeMovement function.
        - https://makecode.com/\_gbp49eFCff14
      9. Restore balance to game. (1 min + 1 min)
        - Give Pacman a limited number of lives.
        - Go to the pacman/ghost collision block and keep track of # pacman lives.
        - https://makecode.com/\_53j7E709j3Ec
      10. If Pacman eats power pellet, he should be able to kill the ghost. (2 min + 5 min)
        - Add a variable to game to keep track of &quot;scared ghost&quot; mode. Set to false at beginning of the game.
        - Set to true in collision with power pellet.
        - In collision with ghost, add if statement to check for scared ghost mode and if true, ghost dies instead of pacman.
          - Ghost goes back to ghost box, but Pacman gets points and continues on. 100 points.
        - https://makecode.com/\_A86RKyJEeJHg
      11. Restore balance to game. (1 min + 2 min)
        - Set a 30 second time limit for scared ghost mode.
        - Create a countdown timer. At end, turn off scared ghost mode (goes back to avoid ghost mode).
        - If Pacman eats a power pellet, turn on scared ghost mode and start the countdown timer at 30 seconds.
          - We need to keep the power pellet sound going while power pellet advantage is on while the countdown is going.
          - Introduce background music to indicate a game mode.
        - If Pacman eats another power pellet, reset timer back to 30 seconds.
        - https://makecode.com/\_MvectzKDmd2Y
      12. Make it clear when you&#39;re in scared ghost mode. (5min + 10min)
        - Create a scared ghost costume for the ghost sprite.
        - Create a scared ghost animation with the scared ghost costume for floating.
        - Set the ghost to the scared ghost costume and animation when you go into scared ghost mode and back to normal costume and floating animation when you finish scared ghost mode.
        - https://makecode.com/\_JCpfu2aEH0qV
      13. Improve AI for ghost (10 min + 15 min)
        - Introduce Chase mode.
        - Chase mode aims the ghost at Pacman.
        - Chase mode aims the ghost at Pacman.
          - Collect list of tiles left, right, and in front of me that are not walls. (L, R, F)
          - Compute vector v to my target point.
          - Choose closest tile that reduces distance to target point.
            1. If no tile makes distance go down, choose to go forwards.
          - Compute the distance between the L and target point, R and target point, F and target point.
          - Pick the smallest distance. Head in that direction.
          - If there&#39;s more than one distance that is the smallest, pick between them randomly.
          - If F, don&#39;t change direction.
          - If L, Rotate-vector(vx, vy, by 90 degrees).
          - If R, Rotate-vector(vx, vy, by 90 degrees).
          - Change my vx and vy to that direction.
          - Move one step forward in the direction of travel.
        - https://makecode.com/\_gowgbaiTLiWX
      14. Restore balance to the game (10 min + 15 min)
        - Ghost has two modes: Scatter and Chase. Switch between modes every 30 seconds.
        - Introduce Scatter mode to balance out Chase mode.
        - Scatter mode reuses earlier AI for random movement.
        - Scatter == Chase with top left corner as your target point.
        - Modify Scatter mode to aim at a corner of the screen to be more predictable.
        - https://makecode.com/\_1Ebagqby0Pbo
      15. Restore balance to the game (1 min + 2 min)
        - Mess with Pacman and Ghost speeds.
        - When Pacman pellet, ghost goes into scatter mode and stays there and Ghost speed drops to 50% below Pacman.
        - https://makecode.com/\_9J2AcC3TiDdY
    1. Extra Credit
      1. Add a second ghost.
      2. Add a second AI for ghost 2.

        - Change the aim for Scatter mode to another corner of the maze.
        - Change from Scatter to Chase after a shorter time, and stay in Chase mode longer.
        - Change between Scatter and Chase up to 3 times before remaining in Chase mode until end.
      - Make a pretty maze with tiles.
    - Add difficulty by speeding things up.
    - Add bonus cherries when things are going fast.

        - Draw cherry
  - Homework: Add 2 more ghosts. Create new AIs for each.
  -
  - Rules

      - Pacman can be in the avoid ghost phase or attack ghost phase.
      - Game starts in the avoid ghost phase.
      - If Pacman touches a pellet, he eats it and gains a point.
      - If Pacman touches a power pellet, he eats it and gains 10 points, and game switches into attack ghost phase.
      - If Pacman is in avoid ghost, if he touches a ghost, he dies.
      - If Pacman is in attack ghost, if he touches a ghost, the ghost dies.
      - Once game switches into attack ghost phase, after 30 seconds, it switches back into avoid ghost phase.
      - If Pacman dies, he loses one life and goes back to start and game resumes in avoid ghost phase.
      - If ghost dies, he goes back to the ghost start box.

    - Game Mechanics
      - Movement ( **1** )
        - Activity: Create a character and make it respond to the gamepad (keyboard-based) [This will take awhile, we haven&#39;t had them use makecode yet...]
      - Collisions (video example of a collision) ( **3** )
        - Example: Bullets
          - How does it work? What happens if it hits? Misses?
        - Types of colliders
        - Mechanics
        - Reactions
        - Sensing collisions
        - Collisions with other players
        - Collisions with non-players e.g. walls
      - Player
        - Controlled by you
      - Non player
        - Randomness
        - AI
      - Rules (Game play?)
        - Scoring
          - Are all points worth the same?
        - Lives
          - How do players regenerate?
          - How many lives do they get?
          - Where do they come back to life? Does the entire board get reset?
        - How does a player win?
        - Turn-taking
        - Can players and enemies do the same things?
        - Does the game speed change over time to make it easier/harder?
      - Feedback loops ( **2** )
        - Actions have a consequence
        - But not all consequences have to be life or death
          - g. Can I bump another player without killing him?
          - g. What happens when I hit a wall?
        - Win more time, points, speed, access to extra levels.

    - Game State (define first)
      - Whose turn is it?
      - What does each player carry?
      - How fast is the player moving?
      - Is the player jumping, running, walking, flying, falling?
      - Where are the other characters?
      - How fast is the game running?
      - What constraints are there on the game play?
      - **Activity:** Reconstruct the game state
        - We get out a chess board or monopoly board and put all the pieces in a legit configuration.
        - Each student writes down the state of the game for themselves.
        - We hide the board.
        - Each student pairs up with another to discuss their game state and create the union of their two descriptions.
        - One pair speaks up and tells us how to recreate the state of the board.
        - We compare with the original and see what&#39;s missing.
    - Game Programming
      - Graphics
        - Coordinate system
        - Colors
        - Interacting with user (UI)
        - Drawing background graphics
        - Drawing text
      - Game Loop
        - Get Input
        - Compute Movement
        - Compute Collisions
        - Draw
      - Game State
        - Structures
        - Lists
        - Strings
        - Associative Arrays
      - Input
        - Keyboard
        - Mouse
        - Game Controller
      - Sprites
        - Movement
        - Costumes
        - Animation
      - Sound
        - Composition
        - Playing
        - Mixing
    - Game Debugging
    - Homework
