import {Component} from 'react'

import Data from '../MatchCard'

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
    }))
    this.setState({content: option})

    console.log(data)
  }

  render() {
    const {content} = this.state
    return (
      <div>
        {content.map(each => (
          <Data details={each} />
        ))}
      </div>
    )
  }
}
export default Welcome
