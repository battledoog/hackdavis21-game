class gamePiece{
    
    constructor(container){
        this.container = container;
        container.each(function(c){
            console.log(c) //c is a child of this container
            if (c.texture.key == 'square1'){
                console.log('not bomb')
            }else{
                console.log('bomb')
            }
        })
        
        
    }
    
    
    
    moveDown(gameBoard){
        gameBoard.printBoard()
        for (var i = gameBoard.boardArray.length-1; i > 0; i--){
            for (var j = 0; j < 10; j++){
                if (gameBoard.boardArray[i][j] == 'x'){
//                    console.log('x found for ' + i + j)
                    gameBoard.boardArray[i][j] = '0'
                    gameBoard.boardArray[i+1][j] = 'x';
                }
            }
        }
        gameBoard.printBoard()
    }
    
    moveRight(){
        
    }
    
    moveLeft(){
        
    }
    
    rotateCw90(){
        
    }
    
    rotateCcw90(){
        
    }
    
    rotate180(){
        
    }
}

//export {gamePiece};