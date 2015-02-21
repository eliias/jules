'use strict';

var Phaser = require( 'phaser' );

function Level( game ) {
    this.damping = 0.5;
}

Level.prototype.init = function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.stage.backgroundColor = '#fff';
};

Level.prototype.preload = function() {
    this.game.load.image( 'background', '/images/background_tile1.png' );
    this.game.load.spritesheet( 'tile1', '/images/gray1.png', 128, 128 );
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

Level.prototype.hitTile = function( player, tile ) {
    var x = player.velocity.x,
        y = player.velocity.y;
    var velocity = Math.sqrt( x * x + y * y );

    if (velocity > 200) {
        tile.sprite.damage( velocity );
        if (tile.sprite.health < 1000) {
            return tile.sprite.animations.next( 1 );
        } else if (tile.sprite.health < 0) {
            tile.sprite.destroy();
        }
    }
};

Level.prototype.create = function() {
    var x,
        y;

    this.game.world.setBounds( 0, 0, 2000, 3200 );
    this.game.add.tileSprite( 0, 0, 2000, 3200, 'background' );

    this.game.physics.startSystem( Phaser.Physics.P2JS );
    this.game.physics.p2.restitution = 0.2;
    this.game.physics.p2.gravity.y = 200;
    this.game.physics.p2.setImpactEvents( true );

    this.player = this.game.add.sprite( 300, 520, 'player' );
    this.player.animations.add( 'idle', [0, 1, 2, 3] );
    this.player.animations.add( 'spin-start', [4, 5] );
    this.player.animations.add( 'spin', [8, 9, 10, 11] );
    this.player.animations.add( 'spin-stop', [12, 13] );
    this.player.animations.add( 'dig', [16, 17, 18, 19] );
    this.player.animations.add( 'die', [20, 21, 22, 23] );

    this.player.animations.play( 'idle', 4, true );

    this.game.physics.p2.enable( this.player, true );
    this.player.body.setRectangle( 60, 116, -10, 2 );
    this.player.body.fixedRotation = true;

    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            var tile;
            tile = this.game.add.sprite( x * 128, 3200 - y * 128, 'tile1' );
            tile.animations.add( 'states' );
            tile.health = 2000;
            this.game.physics.p2.enable( tile, true );
            tile.body.static = true;
            this.player.body.createBodyCallback( tile, this.hitTile, this );
        }
    }

    this.game.camera.follow( this.player );

    this.game.input.onDown.add( this.set, this );
    this.game.input.onUp.add( this.launch, this );
};

Level.prototype.render = function() {
    this.game.debug.body( this.player );
};

module.exports = Level;
