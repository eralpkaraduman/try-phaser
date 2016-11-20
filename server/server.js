module.exports = function(grunt, server) {

  console.log("booting server");

  var io = require('socket.io').listen(server);

  var gameStates = [];

  io.sockets.on('connection', function(client) {

    // do something with socket
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

    client.on('hostStateUpdate', function(data){

      console.log("test");
    });

    client.on('disconnect', function(){
      console.log("disconnect");
    });

  });

};
