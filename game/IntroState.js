module.exports = {

  create: function() {

    var logo = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'logo'
    );

    logo.anchor.setTo(0.5, 0.8);

    var button = this.add.button(this.world.centerX, 500, 'btn', function() {
      //game.state.start('game');
      this.callCreateGame();
    }, this, 1, 0, 0);

    button.anchor.setTo(0.5, 0.5);


  },

  callCreateGame: function() {
    console.log("emit test")
    socket.emit("test");
  }
}
