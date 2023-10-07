import React from 'react'
import GameState from './GameState'


function GameOver({gameState}) {
switch(gameState){
    case GameState.inProgress:
        return<></>;
    case GameState.playerOWins:
        return <div className='game-over'><span style={{color:'yellow'}}>O</span> Wins</div>
    case GameState.playerXWins:
        return <div className='game-over'><span style={{color:'yellow'}}>X</span> Wins</div>
    case GameState.draw:
        return <div className='game-over' style={{color:'pink'}}>Draw</div>     
    default:
        return<></>
}
}

export default GameOver