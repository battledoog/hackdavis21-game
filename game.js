var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1 },
            debug: true
        }
    },
    scene:[StartScene,BackgroundBoard]
};

var game = new Phaser.Game(config);
