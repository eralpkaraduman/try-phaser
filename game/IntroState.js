module.exports = {

  preload: function() {
    game.load.image('logo', 'phaser.png');
    game.load.spritesheet('btn', 'btn-spritesheet.png', 288, 84);
  },

  create: function() {

    var logo = game.add.sprite(
      game.world.centerX,
      game.world.centerY,
      'logo'
    );

    logo.anchor.setTo(0.5, 0.8);

    var button = game.add.button(game.world.centerX, 500, 'btn', function() {

      


    }, this, 1, 0, 0);

    button.anchor.setTo(0.5, 0.5);

  }
}
