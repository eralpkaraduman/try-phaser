var Person = function(game, x, y) {

  this.moveSpeed = 5;

  Phaser.Sprite.call(this, game, x, y, 'man-blue');
  this.anchor.setTo(0.5, 0.5);
  game.add.existing(this);
}

Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;
Person.prototype.update = function() {

}

Person.prototype.move = function(input) {

  var pos = {y: 0, x: 0};

  if (input.up)
  {
      pos.y = -1;
  }
  else if (input.down)
  {
      pos.y = 1;
  }

  if (input.left)
  {
      pos.x = -1;
  }
  else if (input.right)
  {
      pos.x = 1;
  }

  this.x += (pos.x * this.moveSpeed);
  this.y += (pos.y * this.moveSpeed);

}

module.exports = Person
