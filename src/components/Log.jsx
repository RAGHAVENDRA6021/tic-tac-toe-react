import React from 'react'

const Log = ({gameTurns}) => {
  return (
    <ol id="log">
        {
            gameTurns.map(({square:{row,column},player})=>
            <li key={`${row}${column}`}>
                {player} selected {row+1} ,{column+1}
            </li>
        )
        }
    </ol>
  )
}

export default Log;