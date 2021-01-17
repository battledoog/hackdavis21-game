
class BackgroundBoard extends Phaser.Scene {
    
    
    constructor() {
        super('playGame')
    }
    
    preload(){
        this.load.image('backgroundGrid', 'assets/gridBackground.png');
        this.load.image('square1', 'assets/square1.png')
        this.load.image('square2', 'assets/square2.jpg')
    }
    
    create(){
        

        
        this.add.text(20, 20, "Playing game");
        var bg = this.add.sprite(0,0,'backgroundGrid');
        bg.setOrigin(0,0)
        
        var w = 224/10
        var h = 224/10
        
        var square1 = this.add.image(-w/2, -h/2, 'square1')
        var square2 = this.add.image(w/2, -h/2, 'square2')
        square1.displayWidth = w;
        square1.displayHeight = h;
        square2.displayWidth = w;
        square2.displayHeight = h;
        var container = this.add.container(w, h, [square1, square2]);
        container.setSize(2*w, h)
        
        var gamepiece1 = new gamePiece(container);
        var gameBoard1 = new gameBoard(10, 12);
        
        gameBoard1.test();
        
        var keyObj1 = this.input.keyboard.addKey('UP');  // Get key object
        keyObj1.on('down', function(event) { console.log('up is pressed') });
        var keyObj2 = this.input.keyboard.addKey('DOWN');  // Get key object
        keyObj2.on('down', function(event) { 
            console.log('down is pressed');
            gamepiece1.moveDown(gameBoard1);                                   
        });
        var keyObj3 = this.input.keyboard.addKey('RIGHT');  // Get key object
        keyObj3.on('down', function(event) { console.log('right is pressed') });
        var keyObj4 = this.input.keyboard.addKey('LEFT');  // Get key object
        keyObj4.on('down', function(event) { console.log('left is pressed') });
    }
    
    update(){
        
    }
    
    handleKeyStroke(event) {
        // Here you can see what's passed when Phaser triggers it.
        console.log(arguments);

        if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.DOWN) {
            console.log('DOWN was pressed');
        } else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.UP) {
            console.log('UP was pressed');
        }
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