class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    preload() {


    }
    create() {
        this.add.image(centerX, centerY, "gameOver").setScale(2);
        const self= this;
        let restartButton= this.physics.add.sprite(centerX, centerY + 30, "restart").setInteractive().setScale(2);
        let menuButton = this.physics.add.sprite(centerX, centerY + 150, "menu").setInteractive().setScale(2);

        restartButton.body.setSize(restartButton.width/2.5, restartButton.height/5).setOffset(100,80);
        menuButton.body.setSize(menuButton.width/2.5, restartButton.heigh/5).setOffset(100, 80);


        restartButton.on('pointerover',function(pointer){
            restartButton.setAlpha(0.7);
            self.sound.play("blip");
        })

        menuButton.on('pointerover',function(pointer){
            menuButton.setAlpha(0.7);
            self.sound.play("blip");
        })

        restartButton.on('pointerout',function(pointer){
            restartButton.setAlpha(1);
        })
        menuButton.on('pointerout', function(pointer){
            menuButton.setAlpha(1);
        })

        restartButton.on('pointerdown',function(pointer){
            self.scene.stop();
            self.scene.start(pauseScene);
        })
        menuButton.on('pointerdown',function(pointer){
            self.scene.start("menuScene");

        })
    } 

}

