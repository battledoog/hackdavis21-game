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
        
        this.reachedBottom = false;
        
    }
    
    
    
    moveDown(gameBoard){
        if (this.container.y >= 224){
            return 
        }
//        gameBoard.printBoard()
        for (var i = gameBoard.boardArray.length-1; i > 0; i--){
            for (var j = 0; j < gameBoard.width; j++){
                if ((typeof(gameBoard.boardArray[i][j]) == 'string' && gameBoard.boardArray[i][j].includes('x')) || (typeof(gameBoard.boardArray[i][j]) == 'string' && gameBoard.boardArray[i][j].includes('y'))){
//                    console.log('x found for ' + i + j)
                    gameBoard.boardArray[i+1][j] = gameBoard.boardArray[i][j];
                    gameBoard.boardArray[i][j] = '0';
                }
            }
        }
        gameBoard.printBoard()
        return gameBoard
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