demo.state3 = function () {};
demo.state3.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = "#faebd7";

        addChangeStateEventListeners();
    },
    update: function () {},
};
