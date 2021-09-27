import React from 'react'
import Display from './display'

class Clock extends React.Component{

  constructor(props){
      super(props);

      this.state = {
        hour : new Date().getHours(),
        minutes : new Date().getMinutes(),
        seconds : new Date().getSeconds()
      }
  
      this.iid = setInterval(()=>{
        this.setState({
          hour: new Date().getHours(),
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds()
        })
      })
  }

  render(){
    return(
      <div><Display hour = {this.state.hour} minutes = {this.state.minutes} seconds={this.state.seconds}/></div>  
    );
  }
}

export default Clock;