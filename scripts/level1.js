'use strict';

var Phaser = require( 'phaser' );

function Level( game ) {
    this.damping = 4;
}

Level.prototype.init = function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.stage.backgroundColor = '#fff';
};

Level.prototype.preload = function() {
    this.game.load.image( 'background', '/images/background_tile1.png' );
    this.game.load.image( 'tile1', '/images/gray1.png' );
    this.game.load.spritesheet( 'player', '/images/hero.png', 135, 135, 4 );
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

Level.prototype.create = function() {
    var x,
        y;

    this.game.world.setBounds( 0, 0, 2000, 3200 );
    this.game.add.tileSprite( 0, 0, 2000, 3200, 'background' );

    this.game.physics.startSystem( Phaser.Physics.P2JS );
    this.game.physics.p2.restitution = 0.8;
    this.game.physics.p2.gravity.y = 100;

    this.player = this.game.add.sprite( 300, 520, 'player' );
    this.player.animations.add( 'idle' );
    this.player.animations.play( 'idle', 12, true );

    this.game.physics.p2.enable( this.player, true );
    this.player.body.setRectangle( 60, 116, -10, 2 );
    this.player.body.fixedRotation = true;

    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            var tile;
            tile = this.game.add.sprite( x * 128, 3200 - y * 128, 'tile1' );
            this.game.physics.p2.enable( tile, true );
            tile.body.static = true;
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
