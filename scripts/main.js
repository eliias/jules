'use strict';

var Phaser = require( 'phaser' ),
    player = require( './player' ),
    Level  = require( './level' ),
    game;

game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    ''
);

game.state.add( 'level', Level, true );
