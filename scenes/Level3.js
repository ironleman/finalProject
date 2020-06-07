class Level3 extends Phaser.Scene {
    constructor() {
        super("level3Scene");
    }

    preload() {


    }
    create() {
        //some parameters
        this.controllerLock = false;
        this.j= 0;
        this.k= 0;
        this.l= 0; 
        this.levelComplete = false;
        this.gameOver = false;

        //Add the background images so that they flow cohesively
        this.add.image(centerX, centerY, "lv3background").setScale(4);
        this.add.image(5510, 500, "lv3background").setScale(5);
        this.add.image(10000, 500, "lv3background").setScale(5);
        
        //pufferfish player setup
        this.pufferFishShape = 'normal';
        this.pufferFishVelocity = 400;
        this.pufferFish = this.physics.add.sprite(centerX-250, centerY + 700, 'pufferFish').setScale(0.6);
        this.pufferFish.body.setOffset(4, 4);

        //camera and bounds setup (as in previous levels)
        this.cameras.main.setBounds(0, 0, 1920*5, 1080*2);
        this.physics.world.setBounds(0, 0, 1920*5, 950*2);

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

        /*
        It's level 3! No more babysitting
         //have the keyboard UI sprites follow with the camera by setting their scroll factor
         this.key1 = this.add.sprite(-600, -350, 'key1').setScale(2).setOrigin(0).setScrollFactor(0);
         this.key2 = this.add.sprite(-280, -350, 'key2').setScale(2).setOrigin(0).setScrollFactor(0);
         this.key3 = this.add.sprite(30, -350, 'key3').setScale(2).setOrigin(0).setScrollFactor(0);
         this.key4 = this.add.sprite(350, -350, 'key4').setScale(2).setOrigin(0).setScrollFactor(0);
        */

        // anchors in equidistant positions
        this.anchor1 = this.physics.add.sprite(centerX, 500, 'anchor').setScale(4);
        this.anchor1.body.setVelocityY(300);
        this.anchor2 = this.physics.add.sprite(centerX+340, 500, 'anchor').setScale(4);
        this.anchor2.body.setVelocityY(300);
        this.anchor3 = this.physics.add.sprite(centerX+680, 500, 'anchor').setScale(4);
        this.anchor3.body.setVelocityY(300);
        this.anchor4 = this.physics.add.sprite(centerX+1020, 500, 'anchor').setScale(4);
        this.anchor4.body.setVelocityY(300);
        this.anchor5 = this.physics.add.sprite(centerX+1360, 500, 'anchor').setScale(4);
        this.anchor5.body.setVelocityY(300);
        this.anchor6 = this.physics.add.sprite(centerX+1740, 500, 'anchor').setScale(4);
        this.anchor6.body.setVelocityY(300);

        //Stones placement
        this.stone1 = this.physics.add.sprite(centerX+2240, -80, 'rock').setSize(125,300).setScale(4.3);
        this.stone1.rotation = Math.PI/2*3;
        this.stone1.setImmovable();

        this.stone2 = this.physics.add.sprite(this.stone1.x + 800, -1000, 'rock').setSize(125,300).setScale(4);
        this.stone2.rotation = Math.PI/2*3;

        this.stone3 = this.physics.add.sprite(this.stone2.x + 800, -1000, 'rock').setSize(125,300).setScale(4);
        this.stone3.rotation = Math.PI/2*3;

        this.stone4 = this.physics.add.sprite(this.stone3.x + 800, -1000, 'rock').setSize(125,300).setScale(4);
        this.stone4.rotation = Math.PI/2*3;

        this.stone5 = this.physics.add.sprite(this.stone4.x + 800, -1000, 'rock').setSize(125,300).setScale(4);
        this.stone5.rotation = Math.PI/2*3;

        this.stone6 = this.physics.add.sprite(this.stone5.x + 820, -1000, 'rock').setSize(125,300).setScale(4);
        this.stone6.rotation = Math.PI/2*3;

        this.stone7 = this.physics.add.sprite(this.stone6.x + 350, 150, 'rock').setSize(125,300).setScale(6);
        this.stone7.rotation = Math.PI/2*3;
        this.stone7.setImmovable();
        
        //giant eel setup
        this.eel = this.physics.add.sprite(centerX+2270, centerY+1000, 'eel').setSize(150,400).setScale(3);
        this.eel.body.setVelocityY(500);

        //Bruce the shark setup
        this.shark = this.physics.add.sprite(this.stone7.x + 1500, 1300, 'shark').setScale(2);
        this.shark.body.setSize(this.shark.width, this.shark.height/2).setOffset(35, 85);
        this.shark.setDebugBodyColor(0xFFFF00);
        this.shark.setImmovable();

        //Nemo's father setup
        this.marlin= this.physics.add.sprite(this.shark.x + 700, 1300, 'Marlin').setScale(0.5);
        
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
            key: 'dead',
            frames: this.anims.generateFrameNumbers('deathAnim', { start: 0, end: 8, first: 0}),
            frameRate: 6
        });

        //The stressful water level
        this.waterLevel = this.physics.add.sprite(0, 0, 'water').setAlpha(0.3).setOrigin(0).setScale(12);

        // plays BGMusic4 in loop
        // feel free to change the config
        this.music = this.sound.add("BGMusic4");
        let musicConfig = {
            mute: false,
            volume: .25,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

        //Add all necessary sounds
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

        //colliders w/ rocks
        this.physics.add.collider(this.pufferFish, this.stone1);
        this.physics.add.collider(this.pufferFish, this.stone7);

        //for pause menu
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.text(-600, -500, 'Press (SPACE) to pause').setScale(3).setScrollFactor(0);
        pauseScene = "level3Transition";
        //for exiting the game
        keyEsc= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.add.text(-600, -430, 'Press (ESC) to exit').setScale(3).setScrollFactor(0);
    
    } 

    update() {
        //water level lowering
        this.waterLevel.y += 0.25;
        this.physics.world.setBounds(0, this.waterLevel.y, 1920*5, 2150 - this.waterLevel.y);

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

         ///////////////////////////////////////////////////////////////
        //speedy anchor physics (It's level 3, we ain't playing games!!!)
        if (this.anchor1.y > 1300) {
            this.anchor1.body.setVelocityY(-700);
            if (Math.abs(this.pufferFish.x - this.anchor1.x) < 1000) {
                this.tinkSound.play(this.tinkConfig);
            }
        }
        if (this.anchor1.y <= 500) {
            this.anchor1.body.setVelocityY(700);
        }
        if (this.anchor2.y > 1300) {
            this.anchor2.body.setVelocityY(-700);
        }
        if (this.anchor2.y <= 500) {
            this.anchor2.body.setVelocityY(700);
        }
        if (this.anchor3.y > 1300) {
            this.anchor3.body.setVelocityY(-700);
        }
        if (this.anchor3.y <= 500) {
            this.anchor3.body.setVelocityY(700);
        }
        if (this.anchor4.y > 1300) {
            this.anchor4.body.setVelocityY(-700);
        }
        if (this.anchor4.y <= 500) {
            this.anchor4.body.setVelocityY(700);
        }
        if (this.anchor5.y > 1300) {
            this.anchor5.body.setVelocityY(-700);
            if (Math.abs(this.pufferFish.x - this.anchor5.x) < 1000) {
                this.tinkSound.play(this.tinkConfig);
            }
        }
        if (this.anchor5.y <= 500) {
            this.anchor5.body.setVelocityY(700);
        }
        if (this.anchor6.y > 1300) {
            this.anchor6.body.setVelocityY(-700);
        }
        if (this.anchor6.y <= 500) {
            this.anchor6.body.setVelocityY(700);
        }

         //giant eel motions
         if (this.eel.y <= 1450) {
            this.eel.body.setVelocityY(0);
            this.time.delayedCall(1000, () => {
                this.eel.body.setVelocityY(600);
            }, null, this);
        }
        if (this.eel.y >= 2200) {
            this.eel.body.setVelocityY(0);
            this.time.delayedCall(1000, () => {
                this.eel.body.setVelocityY(-600);
            }, null, this);
        }

        //Stones falling right on top of pufferfish as it passes them
        if (Math.abs(this.pufferFish.x - this.stone2.x) < 800) {
            this.stone2.y+=15;
        }
        if (Math.abs(this.pufferFish.x - this.stone3.x) < 700) {
            this.stone3.y+=15;
        }
        if (Math.abs(this.pufferFish.x - this.stone4.x) < 700) {
            this.stone4.y+=15;
        }
        if (Math.abs(this.pufferFish.x - this.stone5.x) < 700) {
            this.stone5.y+=13;
        }  
        if (Math.abs(this.pufferFish.x - this.stone6.x) < 700) {
            this.stone6.y+=15;
        }
        
        //////////////////////////////////////////////////////////////////////////////////
        // collision detection w/ all level obstacles
        if (this.physics.overlap(this.pufferFish, this.shark)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor1)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor2)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor3)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor4)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor5)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.anchor6)){
            this.gameOver = true;
        }
        
        if (this.physics.overlap(this.pufferFish, this.eel)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.stone2)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.stone3)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.stone4)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.stone5)){
            this.gameOver = true;
        }
        if (this.physics.overlap(this.pufferFish, this.stone6)){
            this.gameOver = true;
        }

        // seeing if the player is able to scare the shark
        if (Math.abs(this.pufferFish.x - this.shark.x) < 1000 && Math.abs(this.pufferFish.y - this.shark.y) < 1000 && this.pufferFishShape == 'fat') {
            this.shark.anims.play('sharkSpook', true);
            this.shark.body.setVelocityY(-300).setSize(this.shark.width/2, this.shark.height/2).setOffset(65, 85);
            if(this.j == 0) {
                this.sharkSound.play(this.sharkConfig);
            }
            this.j++;
        }

        //Switching Shapes with keys
        this.keyboard1.on('down', () => {    
            this.pufferFishShape = 'normal'; 
                      
            //this.key1.tint = 0xFACADE;
            //this.key2.clearTint();
            //this.key3.clearTint();
            //this.key4.clearTint();
            
            this.pufferFish.anims.play('one', true);
            this.pufferFishVelocity = 400;
            this.pufferFish.setSize(this.pufferFish.width,this.pufferFish.height);
            this.poofSound.play(this.poofConfig);  
         });
          //when key2 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for pufferfish's longer form and adjust hitbox accordingly
         this.keyboard2.on('down', () => {   
            this.pufferFishShape = 'normal';              
            //this.key2.tint = 0xFACADE;
            //this.key1.clearTint();
            //this.key3.clearTint();
            //this.key4.clearTint();
            this.pufferFish.anims.play('two', true);
            this.pufferFishVelocity = 250;
            this.pufferFish.setSize(420,100).setOffset(4,4);
            this.poofSound.play(this.poofConfig);
         });
          //when key3 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for pufferfish's skinnier form and adjust hitbox accordingly
         this.keyboard3.on('down', () => {   
            this.pufferFishShape = 'normal';         
            //this.key3.tint = 0xFACADE;
            //this.key1.clearTint();
            //this.key4.clearTint();
            //this.key2.clearTint();
            this.pufferFish.anims.play('three', true);
            this.pufferFishVelocity = 250;
            this.pufferFish.setSize(130, 400);
            this.poofSound.play(this.poofConfig);
         });
          //when key4 is pressed, give it #FACADE tint, clear tint of other UI keys, play animation for the fattest pufferfish form and adjust hitbox accordingly
         this.keyboard4.on('down', () => {   
            this.pufferFishShape = 'fat';         
            //this.key4.tint = 0xFACADE;
            //this.key2.clearTint();
            //this.key1.clearTint();
            //this.key3.clearTint();
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

        //End goal for level 3 ('Finding Nemo' reference)
        if(this.physics.overlap(this.pufferFish, this.marlin)) {
            this.music.stop();
            this.marlin.body.setVelocityX(300);
            if (this.k == 0) {
                   this.endSound.play(this.endConfig);
                   this.text= this.add.image(this.marlin.x - 100, this.marlin.y - 100, "lv3text").setScale(1.5);
            }
            this.k++;
            this.clock= this.time.delayedCall(7000, () => {
                this.levelComplete = true;
    
            }, null, this);
        }
        
        //Proceed with credits once level is complete
        if (this.levelComplete == true) {
            this.scene.start('creditsScene');
        }

        //Game over if water level depleted
        if (this.waterLevel.y == 2150) {
            this.gameOver = true;
        }

        //Game Over Conditions
        if (this.gameOver == true) {
            this.controllerLock = true;
            this.pufferFish.body.setVelocityX(0);
            this.pufferFish.body.setVelocityY(0);

            if (this.l == 0) {
                this.deathSound.play(this.deathConfig);
            }
            this.l++;
            this.pufferFish.anims.play('dead', true);
            this.time.delayedCall(1400, () =>{
                this.scene.pause();
                this.game.sound.stopAll();
                this.scene.launch('gameOverScene');
            }, null, this);

        }
    }
}
