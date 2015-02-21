'use strict';

var clone   = require( 'lodash/lang/clone' ),
    forEach = require( 'lodash/collection/forEach' ),
    tpl     = {
        width:      11,
        height:     20,
        gridWidth:  128,
        gridHeight: 128,
        start:      {
            x: 1,
            y: 1
        }
    };

module.exports = function( data ) {
    var level = clone( tpl );

    forEach( data, function( item ) {
        item.x = Math.abs( item.x ) + 1;
        item.y = Math.abs( item.y );
    } );

    level.assets = data;

    return level;
};
