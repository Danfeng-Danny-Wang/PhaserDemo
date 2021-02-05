demo.state2 = function () {};
demo.state2.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = "#f0aa08";

        addChangeStateEventListeners();
    },
    update: function () {},
};
