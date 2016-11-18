var Person = require('./person');

var input = {};
var player = null

function create() {

  var game = window.game;
  player = new Person(game, this.world.centerX, this.world.centerY);

  input.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  input.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  input.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  input.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

}

function update() {

  input.up = input.upKey.isDown;
  input.down = input.downKey.isDown;
  input.left = input.leftKey.isDown;
  input.right = input.rightKey.isDown;

  player.move(input);
}

module.exports = {
  create: create,
  update, update
}
