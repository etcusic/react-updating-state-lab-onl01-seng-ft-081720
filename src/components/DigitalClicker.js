// Code DigitalClicker Component Here
import React from 'react';
 
export default class DigitalClicker extends React.Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0
        };
    }
    
    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    
    render() {
        return (
            <div>
            <p>I have been clicked {this.state.timesClicked} times!</p>
            <button onClick={this.handleClick}><label>{this.state.timesClicked}</label></button>
            </div>
        );
    }

}