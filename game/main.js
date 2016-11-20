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

window.globals = {

  socket: null,
  localGameState: {},
  callCreateGame: function() {
    socket.emit("createGame");
  }

}

var socket = io('http://localhost:8080');
socket.on('connect', function(){
  console.log("connected!");
});
socket.on('event', function(data){
  console.log("event");
});
socket.on('disconnect', function(){
  console.log("disconnected!");
});

socket.on('error', function(){
  console.log("error!");
});

socket.on('createdGameCode', function(data) {
  console.log("createdGameCode: " + data.gameCode);
})

window.globals.socket = socket;
