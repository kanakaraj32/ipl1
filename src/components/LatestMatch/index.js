import {Component} from 'react'

import Data from '../MatchCard'

import './index.css'

class Welcome extends Component {
  state = {content: []}

  componentDidMount() {
    this.raju()
  }

  raju = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const option = data.latest_match_details.map(each => ({
      competingTeam: each.competing_team,
      competingteamlogo: each.competing_team_logo,
      date: each.date,
      venue: each.venue,
      firstinnings: each.first_innings,
    }))
    this.setState({content: option})

    console.log(data)
  }

  render() {
    // eslint-disable-next-line
    const {content} = this.state

    return (
      <div className="con">
        <h1>raju</h1>
        {content.map(each => (
          <Data details={each} />
        ))}
      </div>
    )
  }
}
export default Welcome
