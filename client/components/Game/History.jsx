import React from 'react'
import { connect } from 'react-redux'

const game = require('../../../server/fakeData/mission2')

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    console.log(game.currentGame.missions[0].rounds);

    console.log(game.currentGame.players)

    return (
      <div>
        <table className="history table">
          <thead>
            <tr>
              <th>
                Mission:
            </th>
              <th>
                Round:
            </th>
              <th>
                Leader:
            </th>
              <th>
                Team:
            </th>

              <th colSpan={game.currentGame.players.length} className="has-text-centered">
                Votes:
            </th>


              <th>
                Result
            </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th colSpan="4"></th>
              {
                game.currentGame.players.map((player, i) => {
                  return <th key={i}>{player.display_name || player.user_name}:</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              game.currentGame.missions.map((mission, i) => {
                return (<tr key={i}>
                  <td>{i + 1}</td>

                </tr>)
              })
            }
          </tbody>


        </table>
        some text
      <table>
          <tbody>
            {game.currentGame.missions[0].rounds.map((round, i) => {
              return (
                <React.Fragment>
                <tr key={i}>
                  <td>{round.round_num}</td>
                  <td>{getName(round.leader_id)}</td>
                  <td>
                    {round.nominations.map((nom) => {
                      return getName(nom.user_id) + ', '
                    })}
                  </td>
                </tr>
                <tr>
                displayRound(round)
                </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>


      </div>)
  }

}

function displayRound(round) {
  return (
    <tr key={i}>
      <td>{round.round_num}</td>
      <td>{getName(round.leader_id)}</td>
      <td>
        {round.nominations.map((nom) => {
          return getName(nom.user_id) + ', '
        })}
      </td>
    </tr>
  )
}

function getName(id) {
  return showName(findPlayer(id))
}

function findPlayer(targetId) {
  return game.currentGame.players.find((player) => {
    return player.id == targetId
  })
}

function showName(player) {
  return player.display_name || player.user_name;
}

const mapStateToProps = (state) => state

export default History