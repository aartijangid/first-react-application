import React, { Component } from 'react'

// Class Component
class Welcome extends Component {
    render() {
    return <h1>Class Component {this.props.name} likes {this.props.hobby}</h1>
    }
}

export default Welcome