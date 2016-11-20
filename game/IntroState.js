module.exports = {

  create: function() {

    var logo = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'logo'
    );

    logo.anchor.setTo(0.5, 0.8);

    var button = this.add.button(this.world.centerX, 500, 'btn', function() {
      window.globals.callCreateGame();
    }, this, 1, 0, 0);

    button.anchor.setTo(0.5, 0.5);

  }
}
