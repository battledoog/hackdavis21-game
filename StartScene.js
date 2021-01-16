class StartScene extends Phaser.Scene {
    constructor(){
        super('bootGame')
    }
    
    create(){
        this.add.text(20, 20, "loading game!!")
        console.log("loaed game")
        this.scene.start("playGame")
    }
}