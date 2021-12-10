import React, { Component } from "react";
import pokemons from '../data.js'
import Pokemon from "./Pokemon";


class Pokedex  extends Component{
    render(){
        return  pokemons.map((poke)=> <Pokemon key={poke.id} pokemon = {poke}/>)
    }
}

export default Pokedex