
class BackgroundBoard extends Phaser.Scene {
    
    
    constructor() {
        super('playGame')
    }
    
    preload(){
        this.load.image('background', 'assets/background.png')
        this.load.image('backgroundGrid', 'assets/gridBackground.png');
        this.load.image('square1', 'assets/rock2.png')
        this.load.image('square2', 'assets/bomb2.png')
        this.load.image('blackSquare', 'assets/whiteSquare.jpg')
        this.firsttime = true;
    }
    
    create(){
        
        this.add.image(800/2, 450/2, 'background')
        this.reachedBottom = false;
        this.bombDropped = 2;
        this.add.text(20, 20, "Playing game");
        var bg = this.add.sprite(0,0,'backgroundGrid');
        bg.setOrigin(0,0)

        var w = 224/10
        var h = 224/10

        
        var square1 = this.add.image(-w/2, -h/2, 'square1') //x=0, y=2
        var square2 = this.add.image(w/2, -h/2, 'square1')  //x=1, y=2
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
        keyObj3.on('down', this.handleKeyRight, this);
        var keyObj4 = this.input.keyboard.addKey('LEFT');  // Get key object
        keyObj4.on('down', this.handleKeyLeft, this);

 
    }
    
    update(){
    }
    
    handleKeyRight(){
        console.log('right is pressed');
        this.gb1 = this.gb1.movePieceToRight();
        this.gp1.leftx -= 1
        this.gp1.rightx -= 1
        this.gb1.printBoard();
        this.renderAll(this.gb1);
    }
    
    handleKeyLeft(){
        console.log('left is pressed');
        this.gb1 = this.gb1.movePieceToLeft();
        this.gp1.leftx += 1
        this.gp1.rightx += 1
        this.gb1.printBoard();
        this.renderAll(this.gb1);
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
                if(this.bombDropped == 0){
                    console.log('bomb exploding')
                    this.gb1 = this.gb1.bombExplode();
                    this.renderAll(this.gb1)
                    this.bombDropped = 2;
                    
                    this.gb1.printBoard()
                }else if(this.bombDropped == 1){
                    console.log('bomb explode next')
                    this.bombDropped -= 1;
                    
                    this.gb1.printBoard()
                    this.renderAll(this.gb1)
                }else{
                    this.gb1.printBoard()
                    this.renderAll(this.gb1)
                }
            }else{
                    this.gb1.printBoard()
                    this.renderAll(this.gb1)
            }

        
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
                
                    var spawnBomb = (Math.random() > 0.5)? true:false;
                    
                    //spawning regular piece
                    if(!spawnBomb){
                                            
                        var square1 = this.add.image(-w/2 + (this.gp1.leftx)*w, -h/2, 'square1') 
                        var square2 = this.add.image(w/2 + (this.gp1.rightx-1)*w, -h/2, 'square1')  
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
                    }else{
                        if (this.bombDropped == 2){
                            console.log('bomb explode next next')
                            this.bombDropped = 1;
                        }
                        
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


                        this.gb1.spawnPieceWithBomb(leftx, rightx);
                        this.gb1.printBoard()
                    }


            }
            console.log("++++++++++++++++++++++++++++++++++++++++")
            this.reachedBottom = false;
        
            
    }
    
    renderAll(gb){
        var w = 224/10
        var h = 224/10
        
//        var square3 = this.add.image(224/2 , 224/2 , 'blackSquare')
//        square3.displayWidth = 224;
//        square3.displayHeight = 224;
        
        for (var i=0; i < gb.boardArray.length; i++){
            for (var j=0; j < gb.boardArray[j].length; j++){
                if (gb.boardArray[i][j] == 's'){
                    var square1 = this.add.image(-w/2 + (j+1)*w, -h/2 + (i-2+1)*h, 'square1') 
                    square1.displayWidth = w;
                    square1.displayHeight = h;
                }else if (gb.boardArray[i][j] == 'e'){
                    var square2 = this.add.image(-w/2 + (j+1)*w, -h/2 + (i-2+1)*h, 'square2') 
                    square2.displayWidth = w;
                    square2.displayHeight = h;
                }else if (gb.boardArray[i][j] == 'x1' || gb.boardArray[i][j] == 'x2'){
                    var square1 = this.add.image(-w/2 + (j+1)*w, -h/2 + (i-2+1)*h, 'square1') 
                    square1.displayWidth = w;
                    square1.displayHeight = h;
                }else if (gb.boardArray[i][j] == 'b2'){
                    var square2 = this.add.image(-w/2 + (j+1)*w, -h/2 + (i-2+1)*h, 'square2') 
                    square2.displayWidth = w;
                    square2.displayHeight = h;
                }else{
                    var square3 = this.add.image(-w/2 + (j+1)*w, -h/2 + (i-2+1)*h, 'blackSquare')
                    square3.displayWidth = h;
                    square3.displayHeight = h;
                }
            }
        }
    }
    
}