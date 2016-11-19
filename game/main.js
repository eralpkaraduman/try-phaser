var bootState = require("./bootState");
var loadState = require("./loadState");
var introState = require("./introState");
var gameState = require("./gameState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('game', gameState);
game.state.add('intro', introState);
game.state.start('boot');
window.game = game;
