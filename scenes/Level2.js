class Level2 extends Phaser.Scene {
    constructor() {
        super("level2Scene");
    }

    preload() {


    }
    create() {
        this.controllerLock = false;
        //some parameters
        this.h = 0;
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.l = 0;
        this.m = 0;

        //Add the background images so that they flow cohesively
        this.add.image(centerX, centerY+2800, 'level2BG').setScale(29);
        
        this.gameOver = false;
        this.pufferFishShape = 'normal';
        this.pufferFishVelocity = 400;
        this.pufferFish = this.physics.add.sprite(centerX + 1000, centerY + 700, 'pufferFish').setScale(0.6);
        this.pufferFish.body.setOffset(4, 4);

        this.cameras.main.setBounds(0, 0, 1080*2, 10000);
        this.physics.world.setBounds(0, 0, 950*2, 10000);

        this.pufferFish.setCollideWorldBounds(true);
        this.cameras.main.setZoom(0.4);

        this.cameras.main.startFollow(this.pufferFish, true, 0.1, 0.1);
        this.cameras.main.followOffset.set(-300, 0);

        // control configs
        cursors = this.input.keyboard.createCursorKeys();
        this.keyboard1 = this.input.keyboard.addKey("ONE");
        this.keyboard2 = this.input.keyboard.addKey("TWO");
        this.keyboard3 = this.input.keyboard.addKey("THREE");
        this.keyboard4 = this.input.keyboard.addKey("FOUR");

        // Tons of rocks
        this.rock0 = this.physics.add.sprite(3000, 500, 'rock').setSize(100,310).setScale(4);
        this.rock0.rotation = Math.PI/2*3;
        this.rock0.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock0);

        this.rock1 = this.physics.add.sprite(3000, 1800, 'rock').setSize(100,310).setScale(4);
        this.rock1.rotation = Math.PI/2*3;
        this.rock1.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock1);

        this.rock2 = this.physics.add.sprite(3000, 3100, 'rock').setSize(100,310).setScale(4);
        this.rock2.rotation = Math.PI/2*3;
        this.rock2.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock2);

        this.rock4 = this.physics.add.sprite(3000, 4400, 'rock').setSize(100,310).setScale(4);
        this.rock4.rotation = Math.PI/2*3;
        this.rock4.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock4);

        this.rock3 = this.physics.add.sprite(3000, 5700, 'rock').setSize(100,310).setScale(4);
        this.rock3.rotation = Math.PI/2*3;
        this.rock3.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock3);

        this.rock5 = this.physics.add.sprite(3000, 7000, 'rock').setSize(100,310).setScale(4);
        this.rock5.rotation = Math.PI/2*3;
        this.rock5.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock5);

        this.rock6 = this.physics.add.sprite(0, 500, 'rock').setSize(100,310).setScale(4);
        this.rock6.rotation = Math.PI/2*3;
        this.rock6.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock6);

        this.rock7 = this.physics.add.sprite(0, 1800, 'rock').setSize(100,310).setScale(4);
        this.rock7.rotation = Math.PI/2*3;
        this.rock7.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock7);

        this.rock8 = this.physics.add.sprite(0, 3100, 'rock').setSize(100,310).setScale(4);
        this.rock8.rotation = Math.PI/2*3;
        this.rock8.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock8);

        this.rock9 = this.physics.add.sprite(0, 4400, 'rock').setSize(100,310).setScale(4);
        this.rock9.rotation = Math.PI/2*3;
        this.rock9.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock9);

        this.rock1a = this.physics.add.sprite(0, 5700, 'rock').setSize(100,310).setScale(4);
        this.rock1a.rotation = Math.PI/2*3;
        this.rock1a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock1a);

        this.rock2a = this.physics.add.sprite(0, 7000, 'rock').setSize(100,310).setScale(4);
        this.rock2a.rotation = Math.PI/2*3;
        this.rock2a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock2a);
        
        this.rock11= this.physics.add.sprite(0, 8300, 'rock').setSize(100,310).setScale(4);
        this.rock11.rotation = Math.PI/2*3;
        this.rock11.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock11);

        this.rock12= this.physics.add.sprite(0, 9600, 'rock').setSize(100,310).setScale(4);
        this.rock12.rotation = Math.PI/2*3;
        this.rock12.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock12);

        this.rock13 = this.physics.add.sprite(3000, 8300, 'rock').setSize(100,310).setScale(4);
        this.rock13.rotation = Math.PI/2*3;
        this.rock13.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock13);

        this.rock14 = this.physics.add.sprite(3000, 9600, 'rock').setSize(100,310).setScale(4);
        this.rock14.rotation = Math.PI/2*3;
        this.rock14.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock14);

        this.rock3a = this.physics.add.sprite(1000, 2000, 'rock').setSize(310,100).setScale(4);
        this.rock3a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock3a);

        this.rock4a = this.physics.add.sprite(2000, 2000, 'rock').setSize(310,100).setScale(4);
        this.rock4a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock4a);

        this.rock5a = this.physics.add.sprite(2200, 3700, 'rock').setSize(310,100).setScale(4);
        this.rock5a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock5a);
        
        this.rock6a = this.physics.add.sprite(800, 3700, 'rock').setSize(310,100).setScale(4);
        this.rock6a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock6a);

        this.rock7a = this.physics.add.sprite(1000, 4300, 'rock').setSize(310,100).setScale(4);
        this.rock7a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock7a);

        this.rock8a = this.physics.add.sprite(2000, 4300, 'rock').setSize(310,100).setScale(4);
        this.rock8a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock8a);

        this.rock8a = this.physics.add.sprite(2000, 4300, 'rock').setSize(310,100).setScale(4);
        this.rock8a.body.immovable = true;
        this.physics.add.collider(this.pufferFish, this.rock8a);

        // snake
        this.snake = this.physics.add.sprite(200, 4000, 'snake').setScale(0.5);
        this.snake.body.setVelocityX(400);

        // anchor
        this.anchor1 = this.physics.add.sprite(1000, 500, 'anchor').setScale(4);
        this.anchor1.body.setVelocityY(300);
        this.anchor2 = this.physics.add.sprite(2000, 500, 'anchor').setScale(4);
        this.anchor2.body.setVelocityY(300);
      
        // Sharks
        this.sharkVel = 400;
        this.shark1 = this.physics.add.sprite(400, 2500, 'shark').setOrigin(0.5);
        this.shark1.body.setVelocityX(this.sharkVel).setSize(this.shark1.width, this.shark1.height/2);
        this.shark1.setImmovable();
        this.shark1.setFlipX();
        this.shark2 = this.physics.add.sprite(2500, 2800, 'shark').setOrigin(0.5);
        this.shark2.body.setVelocityX(-this.sharkVel).setSize(this.shark2.width, this.shark2.height/2);
        this.shark2.setImmovable();
        this.shark3 = this.physics.add.sprite(400, 3100, 'shark').setOrigin(0.5);
        this.shark3.body.setVelocityX(this.sharkVel).setSize(this.shark1.width, this.shark1.height/2);
        this.shark3.setImmovable();
        this.shark3.setFlipX();
        this.shark4 = this.physics.add.sprite(2500, 3300, 'shark').setOrigin(0.5);
        this.shark4.body.setVelocityX(-this.sharkVel).setSize(this.shark2.width, this.shark2.height/2);
        this.shark4.setImmovable();
        
        //have the keyboard UI sprites follow with the camera by setting their scroll factor
        this.key1 = this.add.sprite(-600, -350, 'key1').setScale(2).setOrigin(0).setScrollFactor(0);
        this.key2 = this.add.sprite(-280, -350, 'key2').setScale(2).setOrigin(0).setScrollFactor(0);
        this.key3 = this.add.sprite(30, -350, 'key3').setScale(2).setOrigin(0).setScrollFactor(0);
        this.key4 = this.add.sprite(350, -350, 'key4').setScale(2).setOrigin(0).setScrollFactor(0);

        // Starting animation for the player
        this.anims.create({
            key: "pufferFish_anim",
            frames: this.anims.generateFrameNumbers("pufferFish"),
            framerate: 0.5, // BUG?: Can't changed the framerate. He's a speedy boi
            repeat: -1
        });
        this.pufferFish.play("pufferFish_anim");

        //create animations for the different states the pufferfish can change into        
        this.anims.create({
            key: 'one',
            frames: this.anims.generateFrameNumbers('pufferFish'),
            frameRate: 10, // BUG: Game crashes if exceeds this framerate. Theory?: Overlaps in animations maybe.
            repeat: -1
        });
        this.anims.create({
            key: 'two',
            frames: this.anims.generateFrameNumbers('pufferLong'),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'three',
            frames: this.anims.generateFrameNumbers('pufferTall'),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'four',
            frames: this.anims.generateFrameNumbers('pufferFat'),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'sharkSpook',
            frames: this.anims.generateFrameNumbers('sharkS', { start: 0, end: 0, first: 0}),
            frameRate: 0.5
        });

        this.anims.create({
            key: 'kelpdance',
            frames: this.anims.generateFrameNumbers('kelp', { start: 0, end: 2, first:0}),
            frameRate: 5
        });

        this.anims.create({
            key: 'dead',
            frames: this.anims.generateFrameNumbers('deathAnim', { start: 0, end: 8, first: 0}),
            frameRate: 6
        });
        
        this.anims.create({
            key: 'snakeboi',
            frames: this.anims.generateFrameNumbers('snake'),
            frameRate: 10, // BUG: Game crashes if exceeds this framerate. Theory?: Overlaps in animations maybe.
        });

        //Add the water level
        this.waterLevel = this.physics.add.sprite(0, 0, 'water').setAlpha(0.3).setOrigin(0).setScale(12);
        
        //Add the nets which will appear at the top of the screen
        this.net1= this.physics.add.sprite(0, -500, 'net').setOrigin(0).setScale(15);
        this.net2= this.physics.add.sprite(800, -500, 'net').setOrigin(0).setScale(15);
        this.net3= this.physics.add.sprite(1600, -500, 'net').setOrigin(0).setScale(15);
        this.net4= this.physics.add.sprite(2400, -500, 'net').setOrigin(0).setScale(15);

         //turtle - finishing goal
         this.turtle = this.physics.add.sprite(this.rock12.x + 2500, this.rock12.y + 300, 'turtle').setOrigin(0.5);
         this.turtle.setImmovable();
         this.net5 = this.physics.add.sprite(this.turtle.x+20, this.turtle.y + 150, 'net').setScale(4).setOrigin(0.5);
         this.net5.rotation= -Math.PI/2*0.5;
         this.net5.setImmovable(); 
        
        // plays BGMusic3 in loop
        // feel free to change the config
        this.music = this.sound.add("BGMusic3");
        let musicConfig = {
            mute: false,
            volume: .5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

        this.poofSound = this.sound.add("poof");
        this.poofConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        this.tinkSound = this.sound.add("tink");
        this.tinkConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.deathSound = this.sound.add("deathSound");
        this.deathConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.endSound = this.sound.add("awkward");
        this.endConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.sharkSound = this.sound.add("sharkScream");
        this.sharkConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        // for pause menu
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.text(-600, -500, 'Press (SPACE) to pause').setScale(3).setScrollFactor(0);
        pauseScene = "level2Scene";
        //for exiting the game
        keyEsc= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.add.text(-600, -430, 'Press (ESC) to exit').setScale(3).setScrollFactor(0);


    } 

    update() { 
        //water level bonus
        this.waterLevel.y += .3;
        
        //Nets coming down toward the player
        
        this.net1.y+=2;
        this.net2.y+=2;
        this.net3.y+=2;
        this.net4.y+=2;
       
        this.physics.world.setBounds(0, this.waterLevel.y, 1920*5, 10000 - this.waterLevel.y);

        if (this.snake.x >= 2500) {
            this.snake.body.setVelocityX(-400);
            this.snake.setFlipX(true);
        } else if (this.snake.x <= 600) {
            this.snake.body.setVelocityX(400);
            this.snake.resetFlip();
        }
        this.snake.anims.play('snakeboi', true);

        //shark aimation
        if (this.shark1.x >= 2500) {
            this.shark1.body.setVelocityX(-this.sharkVel);
            this.shark1.setFlipX(true);
        } else if (this.shark1.x <= 400) {
            this.shark1.body.setVelocityX(this.sharkVel);
            this.shark1.resetFlip();
        }

        if (this.shark2.x >= 2500) {
            this.shark2.body.setVelocityX(-this.sharkVel);
            this.shark2.setFlipX(true);
        } else if (this.shark2.x <= 400) {
            this.shark2.body.setVelocityX(this.sharkVel);
            this.shark2.resetFlip();
        }
        if (this.shark3.x >= 2500) {
            this.shark3.body.setVelocityX(-this.sharkVel);
            this.shark3.setFlipX(true);
        } else if (this.shark3.x <= 400) {
            this.shark3.body.setVelocityX(this.sharkVel);
            this.shark3.resetFlip();
        }
        

        if (this.shark4.x >= 2500) {
            this.shark4.body.setVelocityX(-this.sharkVel);
            this.shark4.setFlipX(true);
        } else if (this.shark4.x <= 400) {
            this.shark4.body.setVelocityX(this.sharkVel);
            this.shark4.resetFlip();
        }
        if (this.physics.overlap(this.pufferFish, this.shark1)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.shark2)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.shark3)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.shark4)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.snake)){
            this.gameOver = true;
        }
         //check scare the shark
         if (Math.abs(this.pufferFish.x - this.shark1.x) < 1000 && Math.abs(this.pufferFish.y - this.shark1.y) < 1000 && this.pufferFishShape == 'fat') {
            this.shark1.anims.play('sharkSpook', true);
            this.shark1.body.setVelocityY(-300).setSize(this.shark1.width/2, this.shark1.height/2);
            if(this.h == 0) {
                this.sharkSound.play(this.sharkConfig);
            }
            this.h++;
        }
        if (Math.abs(this.pufferFish.x - this.shark2.x) < 1000 && Math.abs(this.pufferFish.y - this.shark2.y) < 1000 && this.pufferFishShape == 'fat') {
            this.shark2.anims.play('sharkSpook', true);
            this.shark2.body.setVelocityY(-300).setSize(this.shark2.width/2, this.shark2.height/2);
            if(this.i == 0) {
                this.sharkSound.play(this.sharkConfig);
            }
            this.i++;
        }
        if (Math.abs(this.pufferFish.x - this.shark3.x) < 1000 && Math.abs(this.pufferFish.y - this.shark3.y) < 1000 && this.pufferFishShape == 'fat') {
            this.shark3.anims.play('sharkSpook', true);
            this.shark3.body.setVelocityY(-300).setSize(this.shark3.width/2, this.shark3.height/2);
            if(this.j == 0) {
                this.sharkSound.play(this.sharkConfig);
            }
            this.j++;
        }
        if (Math.abs(this.pufferFish.x - this.shark4.x) < 1000 && Math.abs(this.pufferFish.y - this.shark4.y) < 1000 && this.pufferFishShape == 'fat') {
            this.shark4.anims.play('sharkSpook', true);
            this.shark4.body.setVelocityY(-300).setSize(this.shark4.width/2, this.shark4.height/2);
            if(this.k == 0) {
                this.sharkSound.play(this.sharkConfig);
            }
            this.k++;
        }

        if (this.anchor1.y >= 800) {
            this.anchor1.setVelocityY(-300);
            if (Math.abs(this.pufferFish.x - this.anchor1.x) < 700) {
                this.tinkSound.play(this.tinkConfig);
            }
        } else if (this.anchor1.y <= 300) {
            this.anchor1.setVelocityY(300);
        }
        if (this.anchor2.y >= 800) {
            this.anchor2.setVelocityY(-300);
        } else if (this.anchor2.y <= 300) {
            this.anchor2.setVelocityY(300);
        }
        if (this.physics.overlap(this.pufferFish, this.anchor1)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor2)){
            this.gameOver = true;
        }
        
        if (this.physics.overlap(this.pufferFish, this.net1)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.net2)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.net3)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.net4)){
            this.gameOver = true;
        }
        

        if (this.physics.overlap(this.pufferFish, this.snake)){
            this.gameOver = true;
        }
       
        ///////////////////////////////////////////////////////////////
        // paused menu (stop music when paused, then continue playing after game is resumed)
        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.music.pause();
            this.scene.pause();
            this.scene.launch('pauseScene');
        }
        else{
            this.music.resume();
        }

         //Escape key press event that will take the player back to the main title screen
         if(Phaser.Input.Keyboard.JustDown(keyEsc)){
            this.game.sound.stopAll();
            this.scene.start("menuScene");
        }
        
        this.keyboard1.on('down', () => {    
            this.pufferFishShape = 'normal'; 
                      
            this.key1.tint = 0xFACADE;
            this.key2.clearTint();
            this.key3.clearTint();
            this.key4.clearTint();
            
            this.pufferFish.anims.play('one', true);
            this.pufferFishVelocity = 400;
            this.pufferFish.setSize(this.pufferFish.width,this.pufferFish.height);
            this.poofSound.play(this.poofConfig);  
         });
          //when key2 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for pufferfish's longer form and adjust hitbox accordingly
         this.keyboard2.on('down', () => {   
            this.pufferFishShape = 'normal';              
            this.key2.tint = 0xFACADE;
            this.key1.clearTint();
            this.key3.clearTint();
            this.key4.clearTint();
            this.pufferFish.anims.play('two', true);
            this.pufferFishVelocity = 250;
            this.pufferFish.setSize(420,100).setOffset(4,4);
            this.poofSound.play(this.poofConfig);
         });
          //when key3 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for pufferfish's skinnier form and adjust hitbox accordingly
         this.keyboard3.on('down', () => {   
            this.pufferFishShape = 'normal';         
            this.key3.tint = 0xFACADE;
            this.key1.clearTint();
            this.key4.clearTint();
            this.key2.clearTint();
            this.pufferFish.anims.play('three', true);
            this.pufferFishVelocity = 250;
            this.pufferFish.setSize(130, 400);
            this.poofSound.play(this.poofConfig);
         });
          //when key4 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for the fattest pufferfish form and adjust hitbox accordingly
         this.keyboard4.on('down', () => {   
            this.pufferFishShape = 'fat';         
            this.key4.tint = 0xFACADE;
            this.key2.clearTint();
            this.key1.clearTint();
            this.key3.clearTint();
            this.pufferFish.anims.play('four', true);
            this.pufferFishVelocity = 250;
            this.pufferFish.setSize(650,650);
            this.poofSound.play(this.poofConfig);
         });

        ////////////////////////////////////////////////////////////////////////
        // player controls for pufferfish
        if (this.controllerLock == false) {
            if(cursors.up.isDown) {
                this.pufferFish.body.setVelocityY(-this.pufferFishVelocity);
            } else if (cursors.down.isDown) {
                this.pufferFish.body.setVelocityY(this.pufferFishVelocity);
            } else {
                this.pufferFish.body.setVelocityY(0);
            }
            if(cursors.left.isDown) {
                this.pufferFish.body.setVelocityX(-this.pufferFishVelocity);
                this.pufferFish.setFlipX(true);
            } else if (cursors.right.isDown) {
                this.pufferFish.body.setVelocityX(this.pufferFishVelocity);
                this.pufferFish.resetFlip();
            } else {
                this.pufferFish.body.setVelocityX(0);
            }
        }

        if (Math.abs(this.pufferFish.x - this.turtle.x) < 900) {
            this.turtle.y-=4;
            this.net5.y=this.turtle.y;
        }

        //goal check
        if(this.physics.overlap(this.pufferFish, this.turtle)) {
            this.music.stop();
            if (this.l == 0) {
                   this.endSound.play(this.endConfig);
                   this.text= this.add.image(this.turtle.x - 100, this.turtle.y - 100, 'turtbub').setScale(2);
            }
            this.l++;
        }
        
        if (this.levelComplete == true) {
            this.scene.start('level2Transition');
        }

        //game ends
        if (this.waterLevel.y == 2150) {
            this.gameOver = true;
        }
        
        if (this.gameOver == true) {
            this.controllerLock = true;
            this.pufferFish.body.setVelocityX(0);
            this.pufferFish.body.setVelocityY(0);

            if (this.m == 0) {
                this.deathSound.play(this.deathConfig);
            }
            this.m++;
            this.pufferFish.anims.play('dead', true);
            this.time.delayedCall(1400, () =>{
                this.scene.pause();
                this.game.sound.stopAll();
                this.scene.launch('gameOverScene');
            }, null, this);

        }


    }
}
