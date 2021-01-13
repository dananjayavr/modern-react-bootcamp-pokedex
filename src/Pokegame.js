import React, { Component } from 'react'
import { drawRandomDeck } from './helpers'
import Pokedeck from './Pokedeck'
import './Pokegame.css'

class Pokegame extends Component {
    render() {
        let deckOne = drawRandomDeck()
        let deckTwo = drawRandomDeck()

        let deckOneTotal = 0
        deckOne.map((p) => deckOneTotal += p.base_experience)

        let deckTwoTotal = 0
        deckTwo.map((p) => deckTwoTotal += p.base_experience)

        return (
            <div>
                <Pokedeck pokemon={deckOne} isWinner={deckOneTotal > deckTwoTotal ? true : false} total_experience={deckOneTotal}/>
                <Pokedeck pokemon={deckTwo} isWinner={deckOneTotal < deckTwoTotal ? true : false} total_experience={deckTwoTotal}/>
            </div>
        )
    }
}

export default Pokegame