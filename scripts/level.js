'use strict';

var _         = require( 'lodash' ),
    Phaser    = require( 'phaser' ),
    assets    = require( './assets' ),
    asset     = require( './asset' ),
    transform = require( './transform' ),
    level     = transform( require( '../export/level_1' ) );

function Level( game ) {
    this.damping = 0.2;
    this.boost = 15;
    this.health = 40;
    this.threshhold = 10;
    this.width = level.width * level.gridWidth;
    this.height = level.height * level.gridHeight;
}

Level.prototype.init = function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.stage.backgroundColor = '#fff';
};

Level.prototype.preload = function() {
    var self = this;

    this.background = this.game.load.image( 'background', '/images/background_tile1.png' );

    // Assets
    _.forEach( assets, function( asset, key ) {
        self.game.load.spritesheet( key, asset.src, asset.x, asset.y );
    } );

    // Player
    this.game.load.spritesheet( 'player', '/images/hero.png', 135, 135 );
};

Level.prototype.set = function( pointer ) {
    this.startX = pointer.x;
    this.startY = pointer.y;
};

Level.prototype.launch = function( pointer ) {
    var vectorX = this.startX - pointer.x;
    var vectorY = this.startY - pointer.y;

    this.player.body.velocity.x += -vectorX / this.damping;
    this.player.body.velocity.y += -vectorY / this.damping;
};

Level.prototype.hit = function( player, tile ) {
    var x = player.velocity.x,
        y = player.velocity.y,
        velocity;
    velocity = Math.sqrt( x * x + y * y );

    if (velocity > this.threshhold) {
        tile.sprite.damage( velocity );
        if (tile.sprite.health < this.health / 2) {
            //return tile.sprite.animations.next( 1 );
        } else if (tile.sprite.health < 0) {
            tile.sprite.destroy();
        }
    }
};

Level.prototype.spinStart = function() {
    this._spinStart.play( 2, false );
};

Level.prototype.spin = function() {
    this._spinLoop.play( 4, true );
};

Level.prototype.spinStop = function() {
    this._spinStop.play( 2, false );
};

Level.prototype.update = function() {
    var x = this.player.body.velocity.x,
        y = this.player.body.velocity.y,
        velocity = Math.sqrt( x * x + y * y );

    if (velocity > this.threshhold) {
        this.player.animations.play( 'spin', 16, true );
    } else {
        this.player.animations.play( 'idle', 8, true );
    }
};

Level.prototype.create = function() {
    var x,
        y,
        self = this;

    this.game.world.setBounds(
        0,
        0,
        this.width + level.gridWidth,
        this.height + level.gridHeight
    );
    this.game.add.tileSprite(
        0,
        0,
        this.width + level.gridWidth,
        this.height + level.gridHeight,
        'background'
    );

    this.game.physics.startSystem( Phaser.Physics.P2JS );
    this.game.physics.p2.restitution = 0.2;
    this.game.physics.p2.friction = 10;
    this.game.physics.p2.gravity.y = 200;
    this.game.physics.p2.setImpactEvents( true );

    // Border
    for (x = -1; x < Math.round( this.width / assets.tile_border_top.width ) + 1; x += 1) {
        asset( this.game, 'tile_border_top', x * assets.tile_border_top.width, 0 );
    }
    for (y = 0; y < Math.round( this.height / assets.tile_border_left.height ) + 1; y += 1) {
        asset( this.game, 'tile_border_left', 0 * assets.tile_border_left.width, y * assets.tile_border_left.height );
    }
    for (x = -1; x < Math.round( this.width / assets.tile_border_bottom.width ) + 1; x += 1) {
        asset( this.game, 'tile_border_bottom', (x + 1) * assets.tile_border_bottom.width, this.height + assets.tile_border_bottom.height );
    }
    for (y = 0; y < Math.round( this.height / assets.tile_border_right.height ) + 1; y += 1) {
        asset( this.game, 'tile_border_right', this.width + assets.tile_border_right.width, y * assets.tile_border_right.height );
    }

    // Player
    this.player = this.game.add.sprite(
        level.gridWidth * level.start.x,
        level.gridHeight * level.start.y,
        'player'
    );
    this.player.animations.add( 'idle', [0, 1, 2, 3] );
    this.player.animations.add( 'spin-start', [4, 5] );
    this.player.animations.add( 'spin', [8, 9, 10, 11] );
    this.player.animations.add( 'spin-stop', [12, 13] );
    this.player.animations.add( 'dig', [16, 17, 18, 19] );
    this.player.animations.add( 'die', [20, 21, 22, 23] );

    this.player.animations.play( 'idle', 4, true );

    this.game.physics.p2.enable( this.player );
    this.player.body.setRectangle( 60, 116, -10, 2 );
    this.player.body.fixedRotation = true;

    // Level
    _.forEach( level.assets, function( a ) {
        var tile = asset( self.game, a.sprite, a.x * 128, a.y * 128, a.opts );
        self.player.body.createBodyCallback( tile, self.hit, self );
    } );

    this.game.camera.follow( this.player );

    this.game.input.onDown.add( this.set, this );
    this.game.input.onUp.add( this.launch, this );
};

module.exports = Level;
