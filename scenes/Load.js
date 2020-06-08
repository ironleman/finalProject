class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path for assets
        this.load.path = "./assets/";
        //load all necessary assets
        //load all necessary assets
            //set background color to navy blue
            this.cameras.main.setBackgroundColor("#10267B");
            //https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
            //Tutorial used for progress bar loading
            //create progress bar
            let progressBar = this.add.graphics();
            let progressBox = this.add.graphics();
            progressBox.fillStyle(0xFFFF00, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            let width = this.cameras.main.width;
            let height = this.cameras.main.height;
            let loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '	#FFFF00'
                }
            });
            loadingText.setOrigin(0.5, 0.5);

            let percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '	#FFFF00'
                }
            });
            percentText.setOrigin(0.5, 0.5);
        
            let assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '	#FFFF00'
                }
            });
            assetText.setOrigin(0.5, 0.5);

        this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });

        this.load.on("progress", function (value){ 
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30)

        });
        this.load.image("corals", "Coral Reef.png");
        this.load.image("LSbackground", "Background (1).png");
        this.load.image('arrowKeys', 'arrows.png');
        this.load.image('textBubble', 'Textbubble.png');
        this.load.image("lv1button", "LV.1button.png");
        this.load.image("lv2button", "LV.2button.png");
        this.load.image("lv3button", "LV.3button.png");
        this.load.image("tutbutton", "Tutbutton.png");
        this.load.image('stone1', 'Stone_1.png');
        this.load.image('stone2', 'Stone_2.png');
        this.load.image('stone3', 'Stone_3.png');
        this.load.image('stone4', 'Stone_4.png');
        this.load.image('stone5', 'Stone_5.png');
        this.load.image('stone6', 'Stone_6.png');
        this.load.image('shark', 'Shark.png');
        this.load.image('tutorialTrans', 'tutorialTransition.png');
        this.load.image('level1load', 'level1Transition.png');
        this.load.image('water', 'waterLevel.png');
        this.load.image('wall', 'wall.png');
        this.load.image('anchor', 'Anchor-02.png');
        this.load.image('anchor1', 'anchor1.png');
        this.load.image('cageG', 'CagedGirl.png');
        this.load.image('chain', 'Chain.png');
        this.load.audio('poof', 'poof.wav');
        this.load.audio('tink', 'tink.wav');
        this.load.audio('deathSound', 'deathsound.wav');
        this.load.audio('sharkScream', 'sharkScream.ogg');
        this.load.audio('levelStart', 'levelStart.wav');
        this.load.image('level1BG', 'level1bg.png');
        this.load.image('level1Text', 'Lv1Textbub.png');
        this.load.image('level2load', 'level2.png');
        this.load.image('level3load', 'level3.png');
        this.load.image('waterPickup', 'water.png');
        this.load.image('level2BG', 'level2bg.png');
        this.load.image("resume", "resumeButton.png");
        this.load.image("restart", "restartButton.png");
        this.load.image("Pbackground", "pauseBackground.png");
        this.load.image("menu", "menuButton.png");
        this.load.image("gameOver", "GameOverScreen.png");
        this.load.image('crate', 'crate.png');
        this.load.image('eel', 'eel.png');
        this.load.image('seahorse', 'seahorse.png');
        this.load.spritesheet("angler", "angler.png", {
            frameWidth: 560,
            frameHeight: 448,
            startFrame: 0,
            endFrame: 1
        });
        this.load.spritesheet("snake", "seasnake.png", {
            frameWidth: 952,
            frameHeight: 196,
            startFrame: 0,
            endFrame: 1
        });
        this.load.spritesheet("kelp", "kelp.png", {
            frameWidth: 160,
            frameHeight: 160,
            startFrame: 0,
            endFrame: 2
        });
        this.load.spritesheet("sharkS", "SpookedShark.png", {
            frameWidth: 500,
            frameHeight: 500,
            startFrame: 0,
            endFrame: 0
        });
        this.load.spritesheet("pufferFish", "pufferFishSprite.png", {
            frameWidth: 417,
            frameHeight: 261,
        });
        this.load.spritesheet('pufferLong', 'pufferLongSprite.png',{
            frameWidth: 420,
            frameHeight: 126,
        });
        this.load.spritesheet("pufferTall", "pufferTallSprite.png", {
            frameWidth: 169,
            frameHeight: 416,
        });
        this.load.spritesheet("pufferFat", "pufferFatSprite.png", {
            frameWidth: 640,
            frameHeight: 640,
        });
        this.load.spritesheet("deathAnim", "deathAnim.png", {
            frameWidth: 408,
            frameHeight: 255,
        })
        this.load.video("oceanfloor", "Ocean Floor.mp4");
        this.load.image("play", "Play Button.png");
        this.load.image("select", "SelectionButton.png");
        this.load.image('tutorialBG', 'tutorialArtTemp.png');
        this.load.image('key2', 'keyUI1.png');
        this.load.image('key3', 'keyUI2.png');
        this.load.image('key4', 'keyUI3.png');
        this.load.image('key1', 'keyUI0.png');
        this.load.atlas("bubbles", "bubblesheet.png", "bubbles.json");
        this.load.audio("blip", "reverse_blip.mp3");
        this.load.audio("awkward", "wahWahWaah.wav");
        this.load.image('rock', 'rock.png');
        this.load.image('arrow', 'arrow.png');
        this.load.image('scareShark', 'scaretheshark.png');
        this.load.image('Title', 'title.png');
        this.load.image("lv3background","(new)Background(3).png");
        this.load.image("net", "FishingNet.png");
        this.load.image("turtle", "SeaTurtle.png");
        this.load.image("turtbub", "Turttextbub.png");
        this.load.image("credButton", "credButton.png");
        this.load.image("Marlin", "clownfish.png");
        this.load.image("lv3text", "fishbub.png");
        this.load.once('complete', ()=>{
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            assetText.destroy();
        });

    }
    create() {
        //set background color to navy blue
        this.cameras.main.setBackgroundColor("#10267B");
        //add video file to scene and play the video file
        this.ocean = this.add.video(centerX, centerY, "oceanfloor");
        this.ocean.play();
        this.ocean.setLoop(true);
        //Create team logo text at center of loading screen and set its alpha so that it's slightly visible
        this.logo= this.add.text(480, centerY, "RDSJ L.L.C.", {fontFamily: "Bangers", fontSize: "80px", color: "#FF7F50"});
        this.logo.setAlpha(0.4);
        //create a time event that lasts 10 seconds before transitioning to the next scene
        this.clock= this.time.delayedCall(10000, () => {
           
            this.scene.start("menuScene");

        }, null, this);

    } 
}
