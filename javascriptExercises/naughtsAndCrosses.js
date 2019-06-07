const game = {
    playerX: "X",
    playerO: "O",
    grid: [
        [" " ," ", " "], 
        [" " ," ", " "], 
        [" " ," ", " "]
    ],
    gameStart() {
        console.log(this.grid[0])
        console.log(this.grid[1])
        console.log(this.grid[2])
        console.log("X goes first")
        
    },
    gridCheck() {

    }
};

game.gameStart()