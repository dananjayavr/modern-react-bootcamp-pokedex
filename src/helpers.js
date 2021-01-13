import { pokemon } from './defaultPokemon'

function addPaddingtoId(id) {
    let strNum = id.toString()
    if (strNum.length === 1) {
        return "0".repeat(2) + strNum
    } else if (strNum.length === 2) {
        return "0".repeat(1) + strNum
    } else {
        return strNum
    }
}

function getRandomElement(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function drawRandomDeck() {
    let deck = []
    while(deck.length < 4) {
        let randomPokemon = getRandomElement(pokemon)
    if(deck.indexOf(randomPokemon) === -1) deck.push(randomPokemon);
    }
    return deck
}

export { addPaddingtoId, getRandomElement, drawRandomDeck }