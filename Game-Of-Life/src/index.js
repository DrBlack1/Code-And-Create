import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from "./Grid"
import Buttons from "./Buttons"



const arrayClone = (arr) => {
    return JSON.parse(JSON.stringify(arr))
}

class Main extends React.Component {

    constructor() {
        super()
        this.speed = 100
        this.rows = 20
        this.cols = 50

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill(Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {
        let gridCopy = arrayClone(this.state.gridFull)
        gridCopy[row][col] = !gridCopy[row][col]
        this.setState({
            gridFull:gridCopy
        })
    }

    seed = () => {
        let gridCopy = arrayClone(this.state.gridFull)
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                if (Math.floor(Math.random()* 4) === 1){
                    gridCopy[i][j] = true
                }     
            }
        }
        this.setState({
            gridFull:gridCopy
            })
    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed)
    }

    pauseButton = () => {
        clearInterval(this.intervalId)
    }

    slow = () => {
        this.speed = 1000
        this.playButton()
    }

    fast = () => {
        this.speed = 100
        this.playButton()
    }

    clear = () => {
        let grid = Array(this.rows).fill(Array(this.cols).fill(false))
        this.setState({
            gridFull: grid,
            generation: 0,
        })
        clearInterval(this.intervalId)
    }

    gridSize = (size) => {
        switch (size) {
            case "1":
                this.cols = 20;
                this.rows = 10;
            break;
            case "2":
                this.cols = 50;
                this.rows = 30;
            break;
            default:
                this.cols = 70;
                this.rows = 50;
        }
        this.clear()
    }

    play = () => {
        let g = this.state.gridFull
        let g2 = arrayClone(g)
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                let count = 0
                if (i > 0) if (g[i - 1][j]) count++;
		        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		        if (j < this.cols - 1) if (g[i][j + 1]) count++;
		        if (j > 0) if (g[i][j - 1]) count++;
		        if (i < this.rows - 1) if (g[i + 1][j]) count++;
		        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		        if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		        if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        })
    }

    componentDidMount(){
        this.seed()
    }

    render() {
        return(
            <div>
                <h1>The Game Of Life</h1>
                <h3>Press play to watch life unfold</h3>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}
                />
                <Grid
                    gridFull = {this.state.gridFull}
                    rows = {this.rows}
                    cols = {this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
                <p>Each box has a chance to live or die on each generation in accordance
                    to some rules:</p>
                <p>1. Any living cell with fewer than two living neighbors dies, as if by underpopulation.<br/>
                2. Any living cell with two or three living neighbors lives on to the next generation.<br/>
                3. Any living cell with more than three living neighbors dies, as if by overpopulation.<br/>
                4. Any dead cell with exactly three living neighbors becomes a live cell, as if by reproduction.
                </p>
            </div>
        )
    }

}


ReactDOM.render(<Main/>, document.getElementById('root'));

