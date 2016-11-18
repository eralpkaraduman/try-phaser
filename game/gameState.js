var Person = require('./person');

module.exports = {

  create: function() {

    var player = new Person(window.game, this.world.centerX, this.world.centerY);
  }
}
