var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 10;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet(
            "adam",
            "assets/spritesheets/adamSheet.png",
            500,
            500
        );
        game.load.image("tree", "assets/backgrounds/treeBG.png");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#80ff80";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 2813, 1000);

        addChangeStateEventListeners();

        var treeBG = game.add.sprite(0, 0, "tree");

        adam = game.add.sprite(centerX, centerY, "adam");
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.7, 0.7);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        adam.animations.add("walk", [0, 1, 2, 3, 4]);

        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(
            centerX - 300,
            0,
            600,
            1000
        );
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            adam.scale.setTo(0.7, 0.7);
            adam.x += speed;
            adam.animations.play("walk", 14, true);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            adam.scale.setTo(-0.7, 0.7);
            adam.x -= speed;
            adam.animations.play("walk", 14, true);
        } else {
            adam.animations.stop("walk");
            adam.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            adam.y -= speed;
            adam.animations.play("walk", 14, true);
            if (adam.y < 370) {
                adam.y = 370;
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            adam.y += speed;
            adam.animations.play("walk", 14, true);
        }
    },
};

function changeState(i, stateNum) {
    game.state.start("state" + stateNum);
    console.log("state" + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    for (var i = 0; i < 10; i++) {
        addKeyCallback(i + 48, changeState, i);
    }
}
