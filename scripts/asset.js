'use strict';

var forEach = require( 'lodash/collection/foreach' ),
    assets  = require( './assets' );

/**
 *
 * @param game
 * @param name
 * @param x
 * @param y
 * @param [opts]
 * @returns {*}
 */
function asset( game, name, x, y, opts ) {
    var a,
        tile;

    a = assets[name];

    if (!a) {
        console.error( name );
        return null;
    }

    tile = game.add.sprite( x, y, name );
    tile.health = a.health;

    forEach( a.animations, function( animation, key ) {
        // TODO check if frames property is set
        tile.animations.add( key );
    } );

    game.physics.p2.enable( tile );

    if (a.bounding) {
        if (a.bounding.type && a.bounding.type === 'circle') {
            tile.body.setCircle( a.bounding.radius );
        }
    }

    tile.body.static = a.static;

    if (opts) {
        forEach( opts, function( opt, key ) {
            //tile.body[key] = opt;
        } );
    }

    return tile;
}

module.exports = asset;
