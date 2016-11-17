module.exports = {
  game: null,

  preload: function() {
    game.load.image('logo', 'phaser.png');
  },

  createGame: function() {

    self.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: this.preload,
      create: function() {

        var logo = game.add.sprite(
          game.world.centerX,
          game.world.centerY,
          'logo'
        );

        logo.anchor.setTo(0.5, 0.5);
      }
    });
  }
}
