module.exports = {

  preload: function() {
    this.load.image('logo', 'phaser.png');
    this.load.spritesheet('btn', 'btn-spritesheet.png', 288, 84);
  },

  create: function() {
    this.state.start('intro');
  }
}
