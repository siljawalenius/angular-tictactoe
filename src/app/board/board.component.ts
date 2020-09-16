import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor(){}

  ngOnInit(): void {
    //lifecycle hook that runs when the app is init
    this.newGame();

  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player(){ //this is a typescript getter
    return this.xIsNext ? 'X' : 'O' ;
  }



  makeMove(idX : number){
    if(!this.squares[idX]){ //check the square to see if its been clicked already
      this.squares.splice(idX, 1, this.player); //if no, splice in index of square with current plater ID
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){ //from a react tutorial vid
    //algorithm to determine if one of the players has won yet or not

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8], //these three are for the horizontal lines ^
      [0, 3, 6],
      [1,4,7],
      [2,5,8], //these three are for verticxal lines ^
      [0,4,8],
      [2,4,6] //and diagonals ^
    ];
    for (let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a]; //if the player who's filled a,b,c matches, they've won
      }
    }
    return null; //to avoid it not returning anything

  }
}
