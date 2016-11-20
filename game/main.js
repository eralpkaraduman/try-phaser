var bootState = require("./bootState");
var loadState = require("./loadState");
var introState = require("./introState");
var gameState = require("./gameState");
var waitForJoinState = require("./waitForJoinState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('game', gameState);
game.state.add('intro', introState);
game.state.add('waitForJoinState', waitForJoinState);

game.state.start('boot');
window.game = game;

window.globals = {

  socket: null,

  localGameState: {
    gameCode: null
  },

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

  var gameCode = data.gameCode;
  if (gameCode != null) {
      console.log("hosting game " + gameCode);
      window.globals.localGameState.gameCode = gameCode
      window.game.state.start('waitForJoinState');
  }

})

window.globals.socket = socket;
