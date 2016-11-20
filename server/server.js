module.exports = function(grunt, server) {

  console.log("booting server");

  var io = require('socket.io').listen(server);

  var gameStates = [];

  io.sockets.on('connection', function(client) {

    console.log("connected!");

    client.on('event', function(data){
      console.log("event");
    });

    client.on('createGame', function(data){
      var newGameIndex = gameStates.length;
      var gameCode = newGameIndex;

      gameStates[newGameIndex] = {
        "gameCode": gameCode,
        "hostState": {},
        "clientState": {}
      };

      client.emit("createdGameCode", {"gameCode": gameCode});
    });

    client.on('joinGame', function(data) {
      var enteredGameCode = data.gameCode;
      console.log("requested to join game: "+ enteredGameCode);

      var gameIndex = parseInt(enteredGameCode);
      var gameState = gameStates[gameIndex];
      if (gameState !== null) {

        client.emit('joinedGame', {"gameCode": enteredGameCode});
      } else {
        console.log("game not found: "+ enteredGameCode);
      }
    });

    client.on('hostStateUpdate', function(data){

      console.log("test");
    });

    client.on('disconnect', function(){
      console.log("disconnect");
    });

  });

};
