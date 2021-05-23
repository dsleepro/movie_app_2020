import React from 'react'

// function Detail(props) {
//   console.log(props)
//   return <span>hello</span>
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push('/')
    }
  }

  render() {
    const { location } = this.props
    if (location.state) {
      return (
        <div>
          <h1>{location.state.title}</h1>
          <p>{location.state.summary}</p>
        </div>
      ) 
    } else {
      return null
    }
  }
}

export default Detail