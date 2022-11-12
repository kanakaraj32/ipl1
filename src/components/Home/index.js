import {Component} from 'react'

import './index.css'

class Home extends Component {
  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updata = data.map(each => ({
      id: each.id,
    }))
    console.log(data)
  }

  render() {
    return (
      <div className="container">
        <div className="con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
      </div>
    )
  }
}
export default Home
