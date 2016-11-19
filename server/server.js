module.exports = function(grunt, server) {

  console.log("booting server");

  var io = require('socket.io').listen(server);

  io.sockets.on('connection', function(client) {
    // do something with socket
    console.log("connected!");

    client.on('event', function(data){
      console.log("event");
    });

    client.on('test', function(data){
      console.log("test");
    });

    client.on('disconnect', function(){
      console.log("disconnect");
    });

  });
};
