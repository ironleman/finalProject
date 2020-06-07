class credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {

        //add the level select background image for credits scene 
        this.add.image(centerX, centerY, "LSbackground").setScale(2.1);
        
        //Add zone for the text to pop up in 
        //https://phasertutorials.com/creating-a-phaser-3-template-part-2/
        this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

        //set camera bounds
        this.cameras.main.setBounds(0, 0, 1920*2, 1080*2);

        // play main BGMusic in loop from configuration
        this.music = this.sound.add("BGMusic");
        let musicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

        //Add title and all necessary lines of credits text
        this.title= this.add.image(0, 0, "Title").setScale(2);

        this.created= this.add.text(0, 0, "A Game by RDSJ L.L.C.", {fontFamily: "Bangers", fontSize: "80px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.story= this.add.text(0, 0, "Story by Dennis Moiseyev and Simon Lemay", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.Simon= this.add.text(0, 0, "Lead Programming & Level Design - Simon Lemay", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.Dennis= this.add.text(0, 0, "Programming, UI, Art - Dennis Moiseyev", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.Jenny= this.add.text(0, 0, "Main Art, UI - Huazhen Xu", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.Rene= this.add.text(0, 0, "Programming & Level Design - Rene Ding", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.Jake= this.add.text(0, 0, "Main Sound and Animations - Jake Nguyen", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.additional= this.add.text(0, 0, "Additional Art - Simon Lemay", {fontFamily: "Bangers", fontSize: "60px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

        this.copyright= this.add.text(0, 0, "🐡 Copyright 2020 RDSJ L.L.C.", {fontFamily: "Bangers", fontSize: "30px", color: "#FFFFFF", stroke:"#FFFF00", strokeThickness: 5});

       /*
        https://phasertutorials.com/creating-a-phaser-3-template-part-2/
        Align all needed credits text in center of screen, based on zone parameters
        set each text variable's y, so that they fall below one another
        Add animation tweens for each individual line of text, so they scroll up to the top of the screen
       */
        Phaser.Display.Align.In.Center(
            this.title,
            this.zone
          );

        Phaser.Display.Align.In.Center(
            this.created,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.story,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.Simon,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.Dennis,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.Jenny,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.Rene,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.Jake,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.additional,
            this.zone
          );

          Phaser.Display.Align.In.Center(
            this.copyright,
            this.zone
          );

          this.created.setY(1000);
          this.story.setY(1500);
          this.Simon.setY(2500);
          this.Dennis.setY(3500);
          this.Jenny.setY(4500);
          this.Rene.setY(5500);
          this.Jake.setY(6500);
          this.additional.setY(7500);
          this.copyright.setY(8500);

          this.creditsTween = this.tweens.add({
            targets: this.title, //target= the object of tween
            y: -100, //makes it go off-screen
            ease: 'Power1', //animation ease style
            duration: 5000, //time anim lasts
            delay: 1000, //delay
            onComplete: function () {
              this.destroy; //remove it once complete
            }
          });

          this.createdTween = this.tweens.add({
            targets: this.created,
            y: -100,
            ease: 'Power1',
            duration: 8000,
            delay: 4000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.storyTween = this.tweens.add({
            targets: this.story,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 7000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.SimonTween = this.tweens.add({
            targets: this.Simon,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 14000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.DennisTween = this.tweens.add({
            targets: this.Dennis,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 19000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.JennyTween = this.tweens.add({
            targets: this.Jenny,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 24000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.ReneTween = this.tweens.add({
            targets: this.Rene,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 29000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.JakeTween = this.tweens.add({
            targets: this.Jake,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 34000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.additionalTween = this.tweens.add({
            targets: this.additional,
            y: -100,
            ease: 'Power1',
            duration: 15000,
            delay: 39000,
            onComplete: function () {
              this.destroy;
            }
          });

          this.copyrightTween = this.tweens.add({
            targets: this.copyright,
            y: -100,
            ease: 'Power1',
            duration: 12000,
            delay: 45000,
            onComplete: function () {
              this.destroy;
            }
          });

          //create a timer event that takes you back to the main menu once credits have ended
          this.timer= this.time.delayedCall(60000, () => {
            this.music.stop();
            this.scene.start("menuScene");

        }, null, this);

    } 

}
