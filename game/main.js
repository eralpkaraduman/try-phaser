var BootState = require("./bootState");
var LoadState = require("./loadState");
var IntroState = require("./introState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', BootState);
game.state.add('load', LoadState);
game.state.add('intro', IntroState);
game.state.start('boot');
window.game = game;
