/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  game: null,

	  preload: function() {
	    game.load.image('logo', 'phaser.png');
	  },

	  createGame: function() {

	    self.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	      preload: this.preload,
	      create: function() {

	        var logo = game.add.sprite(
	          game.world.centerX,
	          game.world.centerY,
	          'logo'
	        );

	        logo.anchor.setTo(0.5, 0.5);
	      }
	    });
	  }
	}


/***/ }
/******/ ]);