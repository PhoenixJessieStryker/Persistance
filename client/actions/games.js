import request from '../utils/api'

export function receiveGames(game){
    return {
        type: 'RECEIVE_GAME',
        game
    }
}

export function getPlayersForGame(players) {
    return {
        type: 'RECEIVE_PLAYERS',
        players
    }
}

export function getSingleGame(game_id) { //probs rename to match actual function
    return (dispatch) => {
        return request('get', `temporary/${game_id}`) 
        .then((res) => {
            dispatch(receiveGames(res.body))
        })
        .catch(err =>{
            //dispatch(error(err.message))
            console.log('Err in actions/games.js', err.message)
        })
    }
} 

export function getPlayers(game_id) {
    return (dispatch) => {
        return request ('get', `temporary/roles/${game_id}`)
        .then(res => {
            dispatch(getPlayersForGame(res.body))
        })
        .catch(err => {
            console.log('request failed')
        })
    }
}

