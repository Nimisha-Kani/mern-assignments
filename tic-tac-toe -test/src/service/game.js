
export default class Game{

    
    
    check(cells){

        /* 
            0   1   2
            3   4   5
            6   7   8
        */

        const winningCombos=[
            //rows wins
            [0,1,2],
            [3,4,5],
            [6,7,8],

            //cols win
            [0,3,6],
            [1,4,7],
            [2,5,8],

            //dialgonals
            [0,4,8],
            [2,4,6]
        ];

        for(let winningCombo of winningCombos){
            //winningCombo is an array of three items
            
            const [x,y,z]=winningCombo;  //x=winningCombo[0], y=winningCombo[1], z=winningCombo[2]

            if(cells[x] && cells[x]===cells[y] && cells[y]===cells[z])
                return winningCombo; //return who won
        }

        return null; //no one won yet

    }

    totalMoves(cells){
        //how many non-emepty cells are present
        return cells.filter(c=> c).length;
    }

    isGameOver(cells){
        return this.isGameWon(cells) || this.totalMoves(cells)===9;
    }

    isGameWon(cells){
        return this.check(cells);
    }

    isStalemate(cells){
        return this.totalMoves(cells)===9 && !this.isGameWon(cells);
    }

}