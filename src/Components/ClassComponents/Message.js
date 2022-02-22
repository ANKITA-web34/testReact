import React, { Component } from "react";
import { useState } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Do your best'
        }
    }

    changeMeaasge() {
        this.setState({
            message: 'Going good my girl'
        })
    }   

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=> this.changeMeaasge()}>Go</button>
            </div>
        )
    }
}

export default Message;

