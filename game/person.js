var Person = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'man-blue');
  this.anchor.setTo(0.5, 0.5);
  game.add.existing(this);
}

Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;
Person.prototype.update = function() {

}

module.exports = Person
