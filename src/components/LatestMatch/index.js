import {Component} from 'react'

class Welcome extends Component {
  componentDidMount() {
    this.raju()
  }

  raju = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/:${id}`)
    const data = await response.json()

    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>raju</h1>
      </div>
    )
  }
}
export default Welcome
