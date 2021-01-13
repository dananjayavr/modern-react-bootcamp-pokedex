import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedeck.css'

class Pokedeck extends Component {
    render() {
        const {total_experience, isWinner, pokemon} = this.props
        return (
            <div>
                < div className="Pokedeck">
                    {
                        pokemon.map(d => <Pokecard id={d.id} name={d.name} type={d.type} base_experience={d.base_experience} />)
                    }
                </div>
                <div className="Pokedeck-gameinfo">
                    <h3 >Total Experience: {total_experience}</h3>
                    {
                        isWinner ? <h3 id="Pokedeck-winner">THIS HAND WINS!</h3> : <h3></h3>
                    }
                </div>
            </div>
        )
    }
}

export default Pokedeck