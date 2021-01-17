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
        
        var w = 224/10
        var h = 224/10
        
        this.leftx = 0
        this.rightx = 1
        
        this.ycoord = 2
        
    }
    
    
    
//    moveDown(gameBoard){
////        gameBoard.printBoard()
//        for (var i = gameBoard.boardArray.length-1; i > 0; i--){
//            for (var j = 0; j < gameBoard.width; j++){
//                if ((typeof(gameBoard.boardArray[i][j]) == 'string' && gameBoard.boardArray[i][j].includes('x')) || (typeof(gameBoard.boardArray[i][j]) == 'string' && gameBoard.boardArray[i][j].includes('y'))){
////                  console.log('x found for ' + i + j)
//                    gameBoard.boardArray[i+1][j] = gameBoard.boardArray[i][j];
//                    gameBoard.boardArray[i][j] = undefined;
//                    
//                }
//                
//                
//            }
//        }
//        gameBoard.printBoard()
//        return gameBoard
//    }
    
//    
//    isBottom(ycoord, gameBoard){
//        
//        return gameBoard.boardArray[gameBoard.boardArray.length-1].indexOf(ycoord) >= 0
//    }
//    
//    
//    moveRight(){
//        
//    }
//    
//    moveLeft(){
//        
//    }
//    
//    rotateCw90(){
//        
//    }
//    
//    rotateCcw90(){
//        
//    }
//    
//    rotate180(){
//        
//    }
}

//export {gamePiece};