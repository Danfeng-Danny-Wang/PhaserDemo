var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var adam;
var speed = 4;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.image("adam", "assets/sprites/adam.png");
    },
    create: function () {
        game.stage.backgroundColor = "#80ff80";
        console.log("state0");
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        addChangeStateEventListeners();

        adam = game.add.sprite(centerX, centerY, "adam");
        adam.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            adam.x += speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            adam.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            adam.y -= speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            adam.y += speed;
        }
    },
};

function changeState(i, stateNum) {
    game.state.start("state" + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    for (var i = 0; i < 10; i++) {
        addKeyCallback(i + 48, changeState, i);
    }
}
