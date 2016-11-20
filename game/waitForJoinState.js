module.exports = {

  create: function() {

    var gameCode = window.globals.localGameState.gameCode;
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    var text = game.add.text(game.world.centerX, game.world.centerY, "Hosting game\n"+gameCode+"\nWaiting...", style);
    text.anchor.set(0.5);
  }

}
