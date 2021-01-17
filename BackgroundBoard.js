
class BackgroundBoard extends Phaser.Scene {
    
    
    constructor() {
        super('playGame')
    }
    
    preload(){
        this.load.image('backgroundGrid', 'assets/gridBackground.png');
        this.load.image('square1', 'assets/square1.png')
        this.load.image('square2', 'assets/square2.jpg')
        this.firsttime = true;
    }
    
    create(){
        
        this.reachedBottom = false;
        this.add.text(20, 20, "Playing game");
        var bg = this.add.sprite(0,0,'backgroundGrid');
        bg.setOrigin(0,0)

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
        
        this.gameBoard = new gameBoard(10, 12)
        this.gb1 = this.gameBoard;
        this.gp1 = new gamePiece(container)
        
                
        if (this.firsttime){
//            this.newBottomCoord = [224,224,224,224,224,224,224,224,224,224,224,224];
//            console.log(this.newBottomCoord)
        
            this.gb1.boardArray[2][0] = 'x1'
            this.gb1.boardArray[2][1] = 'x2'
            this.gb1.printBoard()
            this.firsttime = false;
      
        }
            
//      var keyObj1 = this.input.keyboard.addKey('UP');  // Get key object
//      keyObj1.on('down', function(event) { console.log('up is pressed') });
        var keyObj2 = this.input.keyboard.addKey('DOWN');  // Get key object
        keyObj2.on('down', this.handleKeyDown, this);
        var keyObj3 = this.input.keyboard.addKey('RIGHT');  // Get key object
        keyObj3.on('down', function(event) { console.log('right is pressed') });
        var keyObj4 = this.input.keyboard.addKey('LEFT');  // Get key object
        keyObj4.on('down', function(event) { console.log('left is pressed') });

 
    }
    
    update(){
    }
    
    handleKeyDown(){
            console.log('down is pressed');
//            this.gp1.moveDown(this.gb1);
            var w = 224/10
            var h = 224/10
            

            this.gp1.ycoord += 1
            var updateResult = this.gb1.updateBoard(this.gp1.leftx, this.gp1.ycoord)
            this.gp1.container.y += h
            if (updateResult == 'bottomReached'){
                this.reachedBottom = true;
            }
            this.gb1.printBoard()
        
//            console.log(this.gp1.leftx + ' ' + this.gp1.rightx)

        
            if (this.reachedBottom != true){
                    console.log('piece goes down by one')
            }else{
                    //check for bottom y coords
                    //spawn new piece


//                    this.newBottomCoord = this.gb1.getNewBottomCoord()
//                    console.log(this.newBottomCoord)

                    var xcoordforspawnleft = [1, 2, 3, 4, 5, 6]
                    this.gp1.leftx = xcoordforspawnleft[Math.floor(Math.random() * xcoordforspawnleft.length)]
                    this.gp1.rightx = this.gp1.leftx + 1
                    var leftx = this.gp1.leftx
                    var rightx = this.gp1.rightx
                
                
                    var square1 = this.add.image(-w/2 + (this.gp1.leftx)*w, -h/2, 'square1') 
                    var square2 = this.add.image(w/2 + (this.gp1.rightx-1)*w, -h/2, 'square2')  
                    square1.displayWidth = w;
                    square1.displayHeight = h;
                    square2.displayWidth = w;
                    square2.displayHeight = h;
                    var container = this.add.container(w, h, [square1, square2]);
                    container.setSize(2*w, h)
                    this.gp1 = new gamePiece(container)
                    this.gp1.leftx = leftx
                    this.gp1.rightx = rightx
                    this.gp1.ycoord = 2
                
                
                    this.gb1.spawnNewGamePiece(leftx, rightx);
                    this.gb1.printBoard()

            }
            console.log("++++++++++++++++++++++++++++++++++++++++")
            this.reachedBottom = false;
        
            
    }
    
}