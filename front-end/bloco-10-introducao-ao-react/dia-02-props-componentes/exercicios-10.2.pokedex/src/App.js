import './App.css';
import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import Header from './components/Header';



class App extends Component{

  render() {
  return (
    <>
    <Header/>
    <main className='main-content'>
  <Pokedex/>
  </main>
  </>
  );
}
}
export default App;
