'use strict';

window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
var Phaser = window.Phaser = require('phaser/build/custom/phaser-split')

var Level = require('./level');
var game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    ''
);

game.state.add('level', Level, true);
