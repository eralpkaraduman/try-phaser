var bootState = require("./bootState");
var loadState = require("./loadState");
var introState = require("./introState");
var gameState = require("./gameState");
var waitForJoinState = require("./waitForJoinState");
var hackerState = require("./hackerState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('game', gameState);
game.state.add('intro', introState);
game.state.add('waitForJoinState', waitForJoinState);
game.state.add('hackerState', hackerState);

game.state.start('boot');
window.game = game;

window.globals = {

  socket: null,

  localGameState: {
    gameCode: null
  },

  callCreateGame: function() {
    socket.emit("createGame");
  },

  callJoinGame: function() {
    var enteredGameCode = prompt("Enter game code to join: ");
    socket.emit("joinGame", {"gameCode": enteredGameCode});
  }

}

var serverAdress = window.location.href;
var socket = io(serverAdress);
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
      window.globals.localGameState.gameCode = gameCode;
      window.game.state.start('waitForJoinState');
  }

});

socket.on('joinedGame', function(data){
  console.log("joined game: "+ data.gameCode);
  window.game.state.start('hackerState');
});

window.globals.socket = socket;
