var IntroState = require("./IntroState")

module.exports = {
  game: null,
  createGame: function() {
    self.game = new Phaser.Game(800, 600, Phaser.AUTO, '', IntroState);
  }
}
