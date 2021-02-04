var demo = {};
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = "#80ff80";
        console.log("state0");
        // game.input.keyboard
        //     .addKey(Phaser.Keyboard.ONE)
        //     .onDown.add(changeState, null, null, 1);

        // game.input.keyboard
        //     .addKey(Phaser.Keyboard.TWO)
        //     .onDown.add(changeState, null, null, 2);

        // addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
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
