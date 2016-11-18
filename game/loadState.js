module.exports = {

  preload: function() {
    this.load.image('logo', 'phaser.png');
    this.load.image('man-blue', 'man-blue.png');
    this.load.image('man-red', 'man-red.png');
    this.load.image('logo', 'phaser.png');
    this.load.spritesheet('btn', 'btn-spritesheet.png', 288, 84);
  },

  create: function() {
    this.state.start('intro');
  }
}
