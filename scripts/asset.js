'use strict';

var _      = require( 'lodash' ),
    assets = require( './assets' );

function asset( game, name, x, y ) {
    var a,
        tile;

    a = assets[name];
    tile = game.add.sprite( x, y, name );
    tile.health = a.health;

    _.forEach( a.animations, function( animation, key ) {
        // TODO check if frames property is set
        tile.animations.add( key );
    } );

    game.physics.p2.enable( tile, true );
    tile.body.static = a.static;

    return tile;
}

module.exports = asset;
