var game = null;

window.onload = function() {

    game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: function() {
        game.load.image('logo', 'phaser.png');
      },
      create: function() {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
      }
    });
};
