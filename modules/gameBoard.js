class gameBoard {

    

    constructor(boardWidth, boardHeight){
        this.boardArray = new Array(0)
        for (var i = 0; i < boardHeight; i++){
            var arr = new Array(boardWidth);
            this.boardArray.push(arr);
        }

        console.log(this.boardArray)
        
    }
    
    test(){
            this.boardArray[2][0] = 'x'
            this.boardArray[2][1] = 'x'
    
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