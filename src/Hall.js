import React, { Component } from 'react';

export default class Hall extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }


  componentWillReceiveProps(){
    this.setState({ count: ++this.state.count });
  } 


  render() {
    const { count } = this.state;
    let randomColor = '';

    if(count%4===0) randomColor = Math.floor(Math.random()*16777215).toString(16);
  
    return (
      <div style={{backgroundColor: `#${randomColor}`}}>
        Текущее время: {this.props.time}
      </div>
    )
  }
}
