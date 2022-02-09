import React from 'react'

export default function GameModel() {
    const gameBoard = [ // where the game state is stored
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 'X', 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const cellValue = (cell) => { //reads the x as the player
        if(cell === 0) return 'empty'
        else if(cell === 1) return 'one'
        else if(cell === 2) return 'two'
        else if(cell === 'X') return 'player'
    }

    const findPlayer = () => { //console.logs the player's position
        for(let row = 0; row < gameBoard.length; row++) {
            for(let cell = 0; cell < gameBoard[row].length; cell++) {
                if(cellValue(gameBoard[row][cell]) === 'player') {
                    console.log([row, cell])
                    return [row, cell]
                }
            }
        }
    }

    const movement = (e) => {
        e.preventDefault()
        if(e.keycode === 39) {
            
        }
    }
  return (
    <table className="gameBoard">
      {gameBoard && gameBoard.map((gameRow, i) => <tr key={i}>{gameRow.map((item, i) => <td key={i}>{cellValue(item)}</td>)}</tr>)}
      <button onClick={findPlayer}>where am i</button>
    </table>
  )
}
