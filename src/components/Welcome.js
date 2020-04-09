import React, { Component } from 'react'

// Class Component
class Welcome extends Component {
    render() {
        const{name, hobby} = this.props
    // return <h1>Class Component {this.props.name} likes {this.props.hobby}</h1>
    return <h1>Class Component {name} likes {hobby}</h1>
    }
}

export default Welcome