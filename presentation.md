
![fit](http://phaser.io/images/img.png)
# [fit] Phaser
## [fit] HTML5 Game Framework

---

![fit](http://static.tumblr.com/9773fe468562b0d71fe02d3fdf7eb28e/znns28z/Ba1nbdmre/tumblr_static_tumblr_static_ea0t4sc9ww84sogo0oooo40go_focused_v3.jpg)
# [fit] Eralp Karaduman
## [fit] Super Damage Games

---

![original fit](https://static1.squarespace.com/static/56c1bcec1bbee0f5157ce0a6/t/582b289029687fac3b5a92d7/1479223445579/?format=2500w)

---

![original fit](https://static1.squarespace.com/static/56c1bcec1bbee0f5157ce0a6/t/582c2dc06b8f5bc9c585fa14/1479290308092/?format=1000w)

![original fit](https://static1.squarespace.com/static/56c1bcec1bbee0f5157ce0a6/t/582c2db63e00be285a02531e/1479290298204/?format=1000w)

---

![original fit](https://static1.squarespace.com/static/56c1bcec1bbee0f5157ce0a6/t/582b2929e58c62e99d8d8eed/1479223615596/?format=1000w)

![original fit](http://ludumdare.com/compo/wp-content/uploads/2015/04/8xgvbjkwsh.gif)

![original fit](http://ludumdare.com/compo/wp-content/compo2/444368/2525-shot2-1429573470.png)

---

![original fit](http://ludumdare.com/compo/wp-content/compo2/342546/4077-shot2.png)

---

![original fit](http://ludumdare.com/compo/wp-content/compo2/62148/4077-shot0.png)

![original fit](http://ludumdare.com/compo/wp-content/compo2/62148/4077-shot3.png)

---

![original fit](http://ludumdare.com/compo/wp-content/compo2/308734/2525-shot0.png)

---

# [fit] Global Game Jam
# [fit] Ludum Dare
# [fit] itch.io

---

![original fit](http://phaser.io/images/img.png)

---

# [fit] Game Framework?

---

## Rendering
## Scaling
## Particles

---

## Tilemaps
## Timers
## Tweens

---

## Animation
## Sprites
## Input
## Text

---

## Physics
## Audio
## Canvas / WebGL

---

![original fit](http://phaser.io/images/img.png)

---

##index.html

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>try-phaser</title>
        <link rel="stylesheet" href="/main.css" media="all">
    </head>
    <body>
      <div id="content"></div>
      <script src="/bin/phaser.min.js"></script>
      <script src="/bin/bundle.js"></script>
    </body>
</html>
```

---

##main.js

```js
new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
```

---

##main.js

```js
var bootState = require("./bootState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', bootState);
game.state.start('boot');
```

---

##main.js

```js
var bootState = require("./bootState");
var loadState = require("./loadState");
var introState = require("./introState");
var gameState = require("./gameState");

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', null);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('intro', introState);
game.state.add('game', gameState);
game.state.start('boot');
```

---

##bootState.js

```js
module.exports = {

  preload: function() {
    // load assets
  }

  create: function() {
    // setup game
    // initiate player
    // initiate enemy
    game.state.start('load');
  }

  update: function() {
    // handle input & move sprites & check collisions
  }
}
```

---

##introState.js

```js
module.exports = {

  create: function() {

    var logo = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'logo'
    );

    logo.anchor.setTo(0.5, 0.8);

    var button = this.add.button(this.world.centerX, 500, 'btn', function() {
      game.state.start('game');
    }, this, 1, 0, 0);

    button.anchor.setTo(0.5, 0.5);

  }
}
```
---

![fit original](https://github.com/eralpkaraduman/try-phaser/blob/master/introscreen.png?raw=true)

---

##loadState.js

```js
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
```

---

![inline 100%](https://github.com/eralpkaraduman/try-phaser/blob/master/public/btn-spritesheet.png?raw=true)

```js

this.load.spritesheet(
  'btn',
  'btn-spritesheet.png',
  288,
  84
);
```

---

##gameState.js

```js
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
```

---

##gameState.js (create)

```js

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
```

---

## gameState.js (update)

```js

function update() {

  input.up = input.upKey.isDown;
  input.down = input.downKey.isDown;
  input.left = input.leftKey.isDown;
  input.right = input.rightKey.isDown;

  player.move(input);
}
```
---

## person.js

```js

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

  // ...

}

module.exports = Person
```

---

## person.js (move)

```js

Person.prototype.move = function(input) {

  var pos = {y: 0, x: 0};

  if (input.up) {
      pos.y = -1;
  }
  else if (input.down) {
      pos.y = 1;
  }

  if (input.left) {
      pos.x = -1;
  }
  else if (input.right) {
      pos.x = 1;
  }

  this.x += (pos.x * this.moveSpeed);
  this.y += (pos.y * this.moveSpeed);
}

```

----

[phaser.org](eralpkaraduman.com)
[ludumdare.com/compo/](http://ludumdare.com/compo/)
[itch.io/jams](https://itch.io/jams)
[globalgamejam.org](http://globalgamejam.org)
[@superdamage](twitter.com/super_damage)
[superdamage.com](superdamage.com)
[eralpkaraduman.com](eralpkaraduman.com)
[@eralpkaraduman](twitter.com/eralpkaraduman)
