var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('map', 'assets/square1.png');
}

function create ()
{
    var map = this.physics.add.sprite(400, 300, 'map');
    map.setVelocity(0, 100);
    map.setBounce(0, 0);
    map.setCollideWorldBounds(true);
    
    const helloButton = this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    helloButton.setInteractive();
    helloButton.on('pointerover', () => { console.log('pointerover'); });
    
}

function update () {
    
}