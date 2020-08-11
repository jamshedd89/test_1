import React, { Component } from 'react';
import Hall from './Hall';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00.00.00'
    };
  }


  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalID);
  }


  tick() {
    let time = new Date().getHours() + ':'+ new Date().getMinutes()+':'+ new Date().getSeconds()

    this.setState({ time });
  }


  render() {
    const { time, count } = this.state;

    return <p className="app-clock"><Hall time={time} /></p>;
  }
}
