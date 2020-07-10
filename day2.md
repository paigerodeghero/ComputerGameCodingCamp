
# Welcome to Day 2 of the Clemson Game Coding Camp!

## Day 2: Game Mechanics

  - Agenda (Go over high level of the schedule for day 2) (5 min)
      - Activities
      - Learning Goals
    - Homework Review (30 min)
      - Everyone presents their game via screen sharing.
      - Explain how to do screen sharing on Zoom.

    - Review the Story (3 min)
      - What is a story?
      - Are we continuing a storyline from the game from yesterday?
      - For now, the cadaver is Pacman
    - Intro to MakeCode
      - Pull up a MakeCode game and play it.
      - Pull up a MakeCode tutorial and play it.
    - Goal (1 min)
      - Collect all the pellets without getting caught by the ghosts.
      - Activity: Play Pacman. [https://www.google.com/logos/2010/pacman10-i.html](https://www.google.com/logos/2010/pacman10-i.html) (3 minutes) MakeCode pacman.
    - Teach them how to make a character jump.
    - Game Play
      - Definition: How to play this game.
      - How to play the game. Do this via demo. (3 min)
        - Use Pacman from MakeCode.
        - Pacman eats pellets by running over them.
        - There are two types of pellets: pellets and power pellets.
        - If he eats a power pellet, Pacman now has the power to eat the ghosts, which scares them.
        - If a ghost touches Pacman, Pacman dies and gets reborn at the Start.
        - If a Pacman catches a scared ghost, the ghost gets sent back to the ghost box.
        - If Pacman eats all the pellets, the level is over and you have won.
      - Player: Pacman (3 min)
        - Collect pellets
        - Avoid ghosts
        - Points are scored for every pellet gathered.
        - Controlled by you.
      - Non player character (NPC): Ghosts (2 min)
        - Controlled by the computer.
          - AI
          - Randomness
        - Ghosts try to find Pacman and kill him by touching him.
  - **Resources** :

      - [https://www.classicgaming.cc/classics/pac-man/sounds](https://www.classicgaming.cc/classics/pac-man/sounds)

  - Order of building Pacman. Do this in MakeCode Arcade.
    - Create Pacman project in makecode arcade. (1 min + 2 min)

        - Navigate to makecode arcade.
        - Click on new project (+) button.
        - Type in name for your project.
        - Click create.
        - Click on GitHub sync button on the bottom.
        - https://makecode.com/_KeiAjw5TuHsr
    - Create Pacman sprite (5 min + 5 min)

        - Use &#39;set mySprite to sprinte kind of player&#39; block to on start.
        - Click on the sprite edit area.
        - Create pacman sprite.
        - Rename mysprite to Pacman.
        - https://makecode.com/_UcL9833saViy
    - Place Pacman on the screen. (1 min + 2 min)

        - Use &#39;place mySprite on top of tilemap col row&#39; block.
        - Change myprite to Pacman and set at position col 5 row 2.
        - https://makecode.com/_MUYLm9YkeYEy
    - Make Pacman Move with the gamepad. (3 min + 5 min)

        - Create a &#39;on game update&#39; block.
        - Drag &#39;move mySprite with buttons&#39; block to on game update.
        - Press + on the block.
        - Add 50,50 for vx and vy velocity.
        - https://makecode.com/_WHrM73LaV40p
    - Draw the Maze (ugly maze just a block for walls) (5 min + 10 min)

        - Drag &#39;set tilemap to&#39; block the top of on start.
        - Click on edit tilemap area.
        - Click on &#39;My Tiles&#39;.
        - Press + to create a new tile.
        - Create a blue block my painting entire area in blue. Click done.
        - Select the newly created tile.
        - Draw a basic maze for the game.
        - Rearrange Pacman&#39;s position if needed.
        - https://makecode.com/_dtJD0Agwg27k
        - Ensure there are no dead ends (don&#39;t explain this).
    - Camera follow Pacman (1min + 2 min)

        - Drag &#39;camera follow sprite mySprite&#39; block to on game update.
        - Change mySptite to Pacman.
        - https://makecode.com/_YWAAXhHV6gpE
    - Introduce Walls (3 min + 3 min)

        - Click on edit tilemap area.
        - Click on draw walls.
        - Draw the walls over blue tiles and click done.
        - https://makecode.com/_d0f0TXYzUErh
        - Collisions
        - Can&#39;t go through walls.
      - Create pellets and place them in the maze. (3 min + 3 min)

          - Click on draw maze area.
          - Click on My Tiles.
          - Create a new tile that looks like a pellet. (Start drawing from 7,7).
          - Place it all over the tile map expect for corners and ghost box.
          - https://makecode.com/_EbK4wCCDj0AK
    - Enable Pacman to eat the pellets. (5 min + 5 min)

        - Create a &#39;on sprite o kind player overlap at location&#39; block.
        - Click the drop down and select the pellet tile.
        - Drag a &#39;set at tilemap col row&#39; block inside the above block.
        - Replace row col with location.
        - https://makecode.com/_We6D2FDU3bzo
      - When Pacman eats a pellet, play a sound. (2 min + 5 min)
        - Drag &#39;play sound &#39; to on sprite overlap block.
        - Choose preferred sound.
        - Drag &#39;set volume 20&#39; to on start.
        - https://makecode.com/_f4retL4i05Dr
    - When Pacman eats a pellet, increase his score. (3 min + 3 min)

        - Drag &#39;set score to 0&#39; to on start.
        - Drag &#39;change score by 1&#39; to on sprite overlap block.
        - https://makecode.com/_FKpC8pV5A9TP
    - Create power pellets and place them in the maze. (3 min + 3 min)

        - Follow same steps as create pellets.
        - https://makecode.com/_2zvfaF3sw1dk
        - Side note: can control the difficulty of the game. engage students in discussion of how many power pellets there should be?
    - Enable Pacman to eat the power pellets and increase his score. (1 min + 2 min)

        - Follow same steps used to enable Pacman to eat normal pellets.
        - When Pacman eats a power pellet make a sound.
        - https://makecode.com/_EU93jiKCkWq1
    - Detect when all pellets are eaten and end the level. (5 min + 10 min)

        - Add a variable (PelletCount) to on start.
        - Save number of pellets in the variable.
        - Change PelletCount by –1 when Pacman eats a pellet or power pellet.
        - On game update, if PelletCount = 0, Game over – you win.
        - https://makecode.com/_W4cL44e4w6R3
    - Make Pacman go over the end of the screen where maze is open (5 min + 10 min)

        - Press debug and navigate Pacman to end of tunnel to find x position of Pacman and left and right end of the tunnel.
        - In on game update create following logic
          - If Pacman x = 7 and left button is pressed
          - Set Pacman x = 249
          - Else if Pacman x = 249 and right button is pressed
          - Set Pacman x = 7.
        - https://makecode.com/_1AjCV36p6UcX
    - Add Pacman animation (10 min + 20 min)

        - Create a new function (animatePacman).
        - Add animation from extensions.
        - Drag &#39;animate sprint … loop&#39; to the new function.
        - Click on create animate frame area.
        - Recreate the exact same Pacman spite. This will give us 1 frame.
        - Copy the frame and make necessary changes.
        - Rearrange frame order.
        - Change interval to 100 ms.
        - Switch loop to on.
        - Drag &#39;call animatePacman&#39; to on start.
        - https://makecode.com/_Vo8MymcY7MwX

  - Total Pacman creation time: 2 hour 26 min.
  - Paper Prototyping as the end of Day 2

      - Prototyping with paper wireframes (Paige)
        - Basics (5 mins)
          - Definition of prototyping: Creating an initial prototype Reasons for prototyping: to (1) test and (2) to see if it meets the clients or users needs and desires. Sometimes we do not know what users or clients need or want by words themselves. Prototyping allows to get early and quick feedback. It helps the developer to understand what they actually should be developing by clarifying it with potential users. It also provides an opportunity to see if the functionality is both logical and user friendly. Is the product intuitive and easily usable? If not, how can we change it? How can we improve the initial design? Many projects go through multiple iterations of prototyping. If developer&#39;s skill the prototyping phase, that means that there could be (1) more bugs that could have
      - Tools (send supplies list July 1)
        - Paper
        - Graph paper
        - Colored pens and pencils
        - Index cards
        - Scissors and tape
        - Coins (can be faked by computer program)
        - **Markers**
        - Dice (fake by computer program)
      - UI/UX ([https://www.youtube.com/watch?v=JMjozqJS44M](https://www.youtube.com/watch?v=JMjozqJS44M) 7.5 mins)
      - Simple prototype activity (20 mins)
        - Activity:
          - Draw a music application with a black marker and paper (e.g. Apple Music or Spotify)
          - List all of the application&#39;s function (e.g. play music)
          - Take a picture of your application
          - Share the list with your partner
            - For every function that your partner mentioned, that you do not have, add it to your drawing.
            - Take a second picture of your application
            - Upload picture and share with the class
          - Prototype Competition. Whoever has the most unique features wins.
        - Talk about how too many features isn&#39;t always the best idea. More bugs can be introduced. So, how do we know what the right features are? How do we know if we have too many features?
      - Game design paper prototype: [https://www.youtube.com/watch?v=dt1bQsZ68iw](https://www.youtube.com/watch?v=dt1bQsZ68iw) (3 mins)
      - Requirements: One important note is that you need to write out what the requirements are for the product that you are creating. By having that written out, you are more easily able to create a clear prototype and product. Thinking about what you are going to do before you do it is essential. (2 mins)
      - Just like in the video, let&#39;s design a start screen for our Pacman game.
        - Create a list of the requirements of a start screen (5 mins)
          - Play Game
          - Save Progress
          - Load saved game
          - Settings
          - Help
        - Activity: (Think/Share)
          - Draw a start screen to support all these requirements.
          - Upload picture and share with the class.
      - Prototype Pacman
        - Activity:
          - Draw the maze you drew for today&#39;s Pacman activity on big piece of paper. Draw in pellets in pencil.
          - Place start screen page on top of maze.
          - When player &quot;clicks&quot; on Play Game, remove the start screen page.
          - Now create a Pacman paper character and place him on the maze in his start position.
          - Create a Pacman controller that goes up/down/left/right.
          - Play Pacman.
          - As Pacman moves over a pellet, erase it from the maze.
          - Sing the Pacman movement music as Pacman goes through the game.
      - **Homework** : have your parents test your Pacman paper game and see if they find any dead ends.
      - Different kinds of users (5 mins)
        - Parents (those without knowledge of how the game is designed). This means they don&#39;t know how your game works. When you have them test your game, you may find that they don&#39;t operate the game in the way that you intended. That means that it might not be intuitive enough.
        - You the designer. You know how the game works. You built it. When you test the game, you will know exactly how it should function. However, when you are testing, you will probably miss some test cases. You might not think about playing the game the way someone else might think it is supposed to be played. Therefore we test our games and our projects.
        - Other peers who are the gamers. Your peers are the in-between point. They know how the game should work because you explained it to them, but they didn&#39;t build it. They will be helpful testers, but might miss somethings that those without the knowledge of how the game is designed might find.
   
 
