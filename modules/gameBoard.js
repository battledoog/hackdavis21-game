class gameBoard {

    

    constructor(boardWidth, boardHeight){
        this.boardArray = new Array(0)
        for (var i = 0; i < boardHeight; i++){
            var arr = new Array(boardWidth);
            this.boardArray.push(arr);
        }
//        console.log(this.boardArray)
    }

//    getNewBottomCoord(){
//        var resultJson = []
//        for (var k = this.boardArray[0].length-1; k >= 0 ; k--){//k=9->0
//            var newBottomCoord = 224;
//            for (var j = this.boardArray.length-1; j >= 2  ; j--){//j=11->2
//                var ele = this.boardArray[j][k];
//                if (typeof(ele) == 'string' && ele.includes('x')){
//                    newBottomCoord = 224 - (12-j)*224/10; 
//                    console.log(j + ' : ' + k + ' is highest block of x = ' + newBottomCoord)
//                }
////                console.log(newBottomCoord + " is bcoord in get new")
//            }
//            resultJson.push(newBottomCoord);
//        }
//        
//        return resultJson.reverse();
//    }
    
    hasCollision(x, y){
        //x+widthofpiece
        if(y == 11){
            console.log('hasCollision at very bottom')
            return true
        }
        if (typeof(this.boardArray[y+1][x]) == 'string' && this.boardArray[y+1][x].includes('s') ){
            console.log('1=====' + x + ' , ' + y)
            return true
        }else if (typeof(this.boardArray[y+1][x+1]) == 'string' && this.boardArray[y+1][x+1].includes('s')){
            console.log('2=====')
            return true
        }else{
            return false
        }
    }
    
    
    updateBoard(x,y){
        console.log(x + ' ' + y)
        if(!this.hasCollision(x,y)){
            var w = 224/10
            var h = 224/10
            var returnStatement = ''

            for (var i = this.boardArray.length - 2; i >= 0 ; i--){
                for (var j = 0; j < this.boardArray[i].length ;j++){
                    var ele = this.boardArray[i][j];
                    
                    if (typeof(ele) == 'string'){
                        if (typeof(ele) == 'string' && ele == 's'){
                            console.log('this is solid block and not moving down anymore.')
                        }else{
                            console.log('this is not solid so block goes down')
                            this.boardArray[i+1][j] = ele;
                            this.boardArray[i][j] = undefined;    
                        }
                    }
                     
                }
            }
        }else{
            console.log("bottom line reached")
            returnStatement = 'bottomReached'
            for (var i = this.boardArray.length - 2; i >= 0 ; i--){
                for (var j = 0; j < this.boardArray[i].length ;j++){
                    var ele = this.boardArray[i][j];
                    if (typeof(ele) == 'string' && ele != 's'){
                        this.boardArray[i+1][j] = ele;
                        this.boardArray[i][j] = undefined;
                    }
                }
            }
            this.printBoard()
            console.log('start solidifying bottom block')
             for (var i = this.boardArray.length - 1; i >= 0 ; i--){
                for (var j = 0; j < this.boardArray[i].length ;j++){
                    var ele = this.boardArray[i][j];
                    if (typeof(ele) == 'string' && ele.includes('x')){
                        this.boardArray[i][j] = 's';   
                    }
                }
            }
        }
        
        return returnStatement
    }            

    spawnNewGamePiece(x1, x2){
            console.log(x1 + ' : ' + x2 + ' spawning')
            this.boardArray[2][x1] = 'x1'
            this.boardArray[2][x2] = 'x2'
    }

    


    printBoard(){
        for (var i = 0; i < this.boardArray.length; i++){
            var eachRow = ''
            for (var j = 0; j < this.boardArray[i].length;j++){
                if (this.boardArray[i][j] == undefined){
                    eachRow += 0
                }else{
                    eachRow += this.boardArray[i][j]
                }
            }
            console.log(eachRow)
            console.log('\n')
        }   
    console.log('------------------------')
    }
}

//export {gameBoard};