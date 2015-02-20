'use strict';

var Phaser = require( 'phaser' ),
    game;

function init() {
    console.log( 'init' );
    game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.stage.backgroundColor = '#5b0c26';
}

function resize() {
    console.log( 'resize' );
}

game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    '',
    {
        init:   init,
        resize: resize
    }
);

module.exports = game;
