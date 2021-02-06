var text;
var sentence;

WebFontConfig = {
    google: {
        families: ["Yusei Magic", "Montserrat"],
    },
};

demo.state8 = function () {};
demo.state8.prototype = {
    preload: function () {
        game.load.script(
            "webfont",
            "//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        );
    },
    create: function () {
        game.stage.backgroundColor = "#b3aaca";

        addChangeStateEventListeners();

        text =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis maximus neque sit amet tempor. Praesent mattis ligula lobortis est facilisis faucibus. Sed mollis vel lectus nec sagittis. Maecenas vel hendrerit arcu. Proin varius purus in volutpat feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum nunc quis tempus dignissim. Integer ut turpis nec sem lobortis pretium tempor eu eros. Fusce congue non massa at facilisis. Vivamus vel efficitur sapien.";

        this.spellOutText(100, 100, 1000, text, 30, 40, "#fff", "Montserrat");
    },
    spellOutText: function (x, y, width, text, fontSize, speed, fill, font) {
        sentence = game.add.text(x, y, "", {
            fontSize: fontSize + "px",
            fill: fill,
            font: font,
        });
        var currentLine = game.add.text(x, y, "", {
            fontSize: fontSize + "px",
            font: font,
        });
        currentLine.alpha = 0;
        var loop = game.time.events.loop(speed, addChar);

        var index = 0;

        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];

            if (index >= text.length - 1) {
                game.time.events.remove(loop);
            }

            if (currentLine.width > width && text[index] == " ") {
                sentence.text += "\n";
                currentLine.text = "";
            }

            index++;
        }
    },
};
