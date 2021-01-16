class BackgroundBoard extends Phaser.Scene {
    constructor() {
        super('playGame')
    }
    
    preload(){
        this.load.image('backgroundGrid', 'assets/gridBackground.png');
        this.load.image('square', 'assets/square1.png')
    }
    
    create(){
        this.add.text(20, 20, "Playing game");
        var bg = this.add.sprite(0,0,'backgroundGrid');
        bg.setOrigin(0,0)
        
        var w = 224/10
        var h = 224/10
        
        var square = this.add.image(-w/2,0,'square')
        var square1 = this.add.image(w/2, 0, 'square')
        square.displayWidth = w;
        square.displayHeight = h;
        square1.displayWidth = w;
        square1.displayHeight = h;
        this.container = this.add.container(w, h, [square, square1]);
        this.container.setSize(2*w, h)
    }
    
    update(){
    }
    
//    function preload ()
//    {
//        this.load.image('map', 'assets/square1.png');
//    }

//    function create ()
//    {
//        var map = this.physics.add.sprite(400, 300, 'map');
//        map.setVelocity(0, 100);
//        map.setBounce(0, 0);
//        map.setCollideWorldBounds(true);
//
//        const helloButton = this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
//        helloButton.setInteractive();
//        helloButton.on('pointerup', () => { console.log('pointerup'); });
//
//    }
}