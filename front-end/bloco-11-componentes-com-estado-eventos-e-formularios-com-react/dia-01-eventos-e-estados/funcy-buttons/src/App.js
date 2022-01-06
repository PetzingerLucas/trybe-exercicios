import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
  }

  getButtonCollor (num){
    return num % 2 === 0 ? 'green': 'yellow'
  }
  handleClick() {this.setState((estadoAnterior, _props)=>({numeroDeClicks: estadoAnterior.numeroDeClicks +1}))}
  
  render(){
    return (<button style={{backgroundColor: this.getButtonCollor(this.state.numeroDeClicks)}}
      onClick={()=>this.handleClick()}>{this.state.numeroDeClicks}</button>);
  }
 
 
}

export default App;
