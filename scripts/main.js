'use strict';

var Phaser    = require( 'phaser' ),
    player = require( './player' ),
    Level1    = require( './level1' ),
    game;

game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    ''
);

game.state.add( 'level1', Level1, true );
game.state.start( 'level1' );
