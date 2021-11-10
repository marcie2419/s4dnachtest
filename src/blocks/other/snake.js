import * as Blockly from "blockly/core";


const blockName = "s4d_snake";

const blockData = {
    "message0": "Create a Snake Game",
    "args0": [],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ` const SnakeGame = require('snakecord');
            const snakeGame = new SnakeGame({
                title: 'Snake Game',
                color: 'GREEN',
                timestamp: false,
                gameOverTitle: 'Game Over'
            });
            snakeGame.newGame(s4dmessage);`;
    return code;
};
