var utils = require("./utils");

window.onload = function() {

    utils.createGame();

    // window.Game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    //   preload: preloader.preload(),
    //   create: function() {
    //
    //     var logo = Game.add.sprite(
    //       window.Game.world.centerX,
    //       window.Game.world.centerY,
    //       'logo'
    //     );
    //
    //     logo.anchor.setTo(0.5, 0.5);
    //   }
    // });
};
