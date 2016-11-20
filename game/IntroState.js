module.exports = {

  create: function() {

    var logo = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'logo'
    );

    logo.anchor.setTo(0.5, 0.8);

    var buttonCreate = this.add.button(this.world.centerX - 100, 500, 'buttons_create', function() {
      window.globals.callCreateGame();
    }, this, 1, 0, 0);

    var buttonJoin = this.add.button(this.world.centerX + 100, 500, 'buttons_join', function() {
      window.globals.callJoinGame();
    }, this, 1, 0, 0);

    buttonCreate.anchor.setTo(0.5, 0.5);
    buttonJoin.anchor.setTo(0.5, 0.5);

  }
}
