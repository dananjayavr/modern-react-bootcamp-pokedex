import React, { Component } from 'react'
import './Pokecard.css'
import { addPaddingtoId } from './helpers'

class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props
        let paddedId = addPaddingtoId(parseInt(id))

        //const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        const fancySrc = ` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
        return (
            <div className="Pokecard">
                <h4 id="Pokecard-name">{name}</h4>
                <img src={fancySrc} id="Pokecard-img" alt="Pokemon Portrait" />
                <p>Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </div>
        )
    }
}

export default Pokecard