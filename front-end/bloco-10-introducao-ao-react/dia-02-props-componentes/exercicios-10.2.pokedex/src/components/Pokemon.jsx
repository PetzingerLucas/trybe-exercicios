import React, { Component } from "react";
import './Pokemon.css'
import PropTypes from 'prop-types';


class Pokemon extends Component{
    render(){

        const { name, image, type, averageWeight } = this.props.pokemon
        return <div className="card">
            <div className="info">
            <h2>{name}</h2>
            <span>{type}</span>
            <span>{averageWeight.value} {averageWeight.measurementUnit}</span>
            </div>
            <div>
            <img src={image} alt="pokemon" />
            </div>
        </div>
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
  };
  

export default Pokemon