import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props){
    return (
      // <button className="square" onClick={()=> alert(props.value)}>
      <button className="square" onClick={()=> props.setOnClickCallBack()}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      squares: Array(9).fill(null)
    }
  }

  renderSquare(i) {
    return (
    <Square 
          value={this.state.squares[i]}
          setOnClickCallBack={()=> this.handleClick(i)}
    />
    )
  }

  handleClick(i){
      const squares_copy = this.state.squares.slice();  //We call .slice() to copy the squares array instead of mutating the existing array
      squares_copy[i] = i;
      this.setState ({squares:squares_copy})
  }

  render() {
    const status = 'Next player: Xfdf';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(  <Game />,  document.getElementById('root')   );
