
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
        
        this.spawnNewGamePiece();
        
        this.gameBoard = new gameBoard(10, 12)
        var gp1 = this.stackedPieces[this.nthPiece];
        var gb1 = this.gameBoard;
        
        gb1.test()
        
//        var keyObj1 = this.input.keyboard.addKey('UP');  // Get key object
//        keyObj1.on('down', function(event) { console.log('up is pressed') });
        var keyObj2 = this.input.keyboard.addKey('DOWN');  // Get key object
        keyObj2.on('down', function(event) { 
            console.log('down is pressed');
            gp1.moveDown(gb1);
            if (gp1.container.y >= 224){
                console.log('piece reached bottom')
                gp1.reachedBottom = true;
            }else{
                gp1.container.y += h;
            }
        });
        var keyObj3 = this.input.keyboard.addKey('RIGHT');  // Get key object
        keyObj3.on('down', function(event) { console.log('right is pressed') });
        var keyObj4 = this.input.keyboard.addKey('LEFT');  // Get key object
        keyObj4.on('down', function(event) { console.log('left is pressed') });

        
        var xadd = this.add;
        this.stackedPieces[this.nthPiece] = gp1;
        
//        setInterval(function(){ 
//                for (var i = 0; i < gameBoard1.boardArray.length; i++){
//                for (var j = 0; j < gameBoard1.boardArray[i].length;j++){
//                    if (typeof(gameBoard1.boardArray[i][j]) == 'string' && gameBoard1.boardArray[i][j].includes('x')){
//                        var w = 224/10
//                        var h = 224/10
//                        var newX =  w*j + w/2
//                        var newY =  h*(i-2) + h/2
//                        square1.destroy()
//                        square1 = xadd.image(newX, newY, 'square1')
//                        square1.displayWidth = w;
//                        square1.displayHeight = h;
//                        var aa = i -2
//                        console.log(newX + '----' + newY + ' is ' + j + '----' + aa)
//                    }else if (typeof(gameBoard1.boardArray[i][j]) == 'string' && gameBoard1.boardArray[i][j].includes('y')){
//                        var w = 224/10
//                        var h = 224/10
//                        var newX =  w*j + w/2
//                        var newY =  h*(i-2) + h/2
//                        square2.destroy()
//                        square2 = xadd.image(newX, newY, 'square2')
//                        square2.displayWidth = w;
//                        square2.displayHeight = h;
//                        var aa = i -2
//                        console.log(newX + '----' + newY + ' is ' + j + '----' + aa)
//                    }  
//            }
//    }
//        }, 3000);
        
    }
    
    update(){
        if (this.stackedPieces[this.nthPiece].reachedBottom == true){
            this.stackedPieces[this.nthPiece].reachedBottom = false;
            this.spawnNewGamePiece();
            console.log(this.stackedPieces[this.nthPiece])
        }
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
    
    spawnNewGamePiece(){
        
        if (typeof this.gamePiece1 !== 'undefined') {
            this.stackedPieces.push("gamepiece")
            this.nthPiece += 1;
        }else{
            this.stackedPieces = []
            this.nthPiece = 1; 
            this.stackedPieces.push("gamepiece")
        }
        
        var w = 224/10
        var h = 224/10
        
        var square1 = this.add.image(-w/2, -h/2, 'square1') //x=0, y=2
        var square2 = this.add.image(w/2, -h/2, 'square2')  //x=1, y=2
        square1.displayWidth = w;
        square1.displayHeight = h;
        square2.displayWidth = w;
        square2.displayHeight = h;
        var container = this.add.container(w, h, [square1, square2]);
        container.setSize(2*w, h)
        
        this.square1 = square1
        this.square2 = square2
        
        this.stackedPieces[this.nthPiece] = new gamePiece(container);
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