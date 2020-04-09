import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        // added for third approach button 'Click Me (bind method in constructor)'
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message: 'Good Bye!!'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick = {this.clickHandler.bind(this)}>Click Me (bind event in method)</button>
                <button onClick = {() => this.clickHandler()}>Click Me (use of arrow)</button>            
                <button onClick = {this.clickHandler}>Click Me (bind method in constructor)</button>
            </div>
        );
    }
}

export default EventBind;