import React, { Component } from 'react';

export default class StateInClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'1',
            name: props.name
            Counter: Number
        }
    }
    render(){
        return(
            <div>
                {this.setState.name}
            </div>
        )
    }
}