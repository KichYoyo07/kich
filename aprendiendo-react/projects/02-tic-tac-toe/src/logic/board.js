import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    //revisa si estan las combinaciones ganadoras
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo 
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
      return boardToCheck[a]
      }
    }
    return null
}


export const checkEndGame = (newBoard) =>{
    //revisamos si hay un empate
    //revisamos que no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null) 
  }