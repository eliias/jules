'use strict';

var _   = require( 'lodash' ),
    tpl = {
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
    var level = _.clone( tpl );

    _.forEach( data, function( item ) {
        item.x = Math.abs( item.x );
        item.y = Math.abs( item.y );
    } );

    level.assets = data;

    return level;
};
