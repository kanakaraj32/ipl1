import {Component} from 'react'

import Data from '../MatchCard'

import './index.css'

class Welcome extends Component {
  state = {content: {}}

  componentDidMount() {
    this.raju()
  }

  raju = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const option = {
      competingTeam: data.latest_match_details.competing_team,
      competingteamlogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      firstinnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      maOfMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
    }
    this.setState({content: option})

    console.log(data)
  }

  render() {
    // eslint-disable-next-line
    const {content} = this.state

    return (
      <div className="con">
        <ul>
          {content.map(each => (
            <Data detail={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Welcome
