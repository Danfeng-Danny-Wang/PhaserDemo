var demo = {};
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = "#80ff80";
        console.log("state0");
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        addChangeStateEventListeners();
    },
    update: function () {},
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
