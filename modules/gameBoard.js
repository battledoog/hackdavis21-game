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
        if ((typeof(this.boardArray[y+1][x]) == 'string' && this.boardArray[y+1][x].includes('s') ) || (typeof(this.boardArray[y+1][x]) == 'string' && this.boardArray[y+1][x].includes('e') )){
            console.log('1=====' + x + ' , ' + y)
            return true
        }else if ((typeof(this.boardArray[y+1][x+1]) == 'string' && this.boardArray[y+1][x+1].includes('s')) || typeof(this.boardArray[y+1][x+1]) == 'string' && this.boardArray[y+1][x+1].includes('e')){
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
                        if ((typeof(ele) == 'string' && ele == 's') || (typeof(ele) == 'string' && ele == 'e')){
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
                    
                    if (typeof(ele) == 'string'){
                        if ((typeof(ele) == 'string' && ele == 's') || (typeof(ele) == 'string' && ele == 'e')){
                            var eleBelow = this.boardArray[i+1][j];
                            if ((typeof(eleBelow) == 'string' && eleBelow == 's') || (typeof(eleBelow) == 'string' && eleBelow == 'e')){
                                console.log('this is solid block and not moving down anymore.')   
                            }
                        }else{
                            console.log('this is not solid so block goes down.')
                            this.boardArray[i+1][j] = ele;
                            this.boardArray[i][j] = undefined;    
                        }
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
                    }else if (typeof(ele) == 'string' && ele.includes('b')){
                        this.boardArray[i][j] = 'e';
                    }
                }
            }
        }
        
        return returnStatement
    }            
    
    movePieceToRight(){
            for (var i = this.boardArray.length - 2; i >= 0 ; i--){
                for (var j = this.boardArray[i].length - 1; j >= 0  ;j--){
                    var ele = this.boardArray[i][j];
                    
                    if (typeof(ele) == 'string'){
                        if ((typeof(ele) == 'string' && ele == 's') || (typeof(ele) == 'string' && ele == 'e')){
                            console.log('this block is solid')
                        }else{
                            if (j+1 < 10){
                                this.boardArray[i][j+1] = ele;
                                this.boardArray[i][j] = undefined;    
                            }
                        }
                    }
                     
                }
            }
        
        return this
    }
    
    movePieceToLeft(){
        for (var i = this.boardArray.length - 2; i >= 0 ; i--){
            for (var j = 0; j < this.boardArray[i].length-1  ;j++){
                var ele = this.boardArray[i][j];

                if (typeof(ele) == 'string'){
                    if ((typeof(ele) == 'string' && ele == 's') || (typeof(ele) == 'string' && ele == 'e')){
                        console.log('this block is solid')
                    }else{
                        if (j-1 >= 0){
                            this.boardArray[i][j-1] = ele;
                            this.boardArray[i][j] = undefined;    
                        }
                    }
                }

            }
        }
        return this
    }

    spawnNewGamePiece(x1, x2){
            console.log(x1 + ' : ' + x2 + ' spawning')
            this.boardArray[2][x1] = 'x1'
            this.boardArray[2][x2] = 'x2'
    }

    spawnPieceWithBomb(x1, x2){
            console.log(x1 + ' : ' + x2 + ' spawning with bomb')
            this.boardArray[2][x1] = 'x1'
            this.boardArray[2][x2] = 'b2'   
    }
    
    bombExplode(){
        for (var i = this.boardArray.length - 1; i >= 0 ; i--){
            for (var j = 0; j < this.boardArray[i].length ;j++){
                var ele = this.boardArray[i][j];
                if (typeof(ele) == 'string' && ele.includes('e')){
                    this.boardArray[i][j] = undefined;
                    if (i-1 > 0){
                        this.boardArray[i-1][j-1] = undefined;
                        this.boardArray[i-1][j] = undefined;
                        this.boardArray[i-1][j+1] = undefined;
                    }
                    this.boardArray[i][j-1] = undefined;
                    this.boardArray[i][j+1] = undefined;
                    if (i < 12 - 1){
                        this.boardArray[i+1][j-1] = undefined;
                        this.boardArray[i+1][j] = undefined;
                        this.boardArray[i+1][j+1] = undefined;               
                    }

                }
            }
        }
        
        return this
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