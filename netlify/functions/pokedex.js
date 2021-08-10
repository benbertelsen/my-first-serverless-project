//tell program we want to run node fetch as installed with NPM

const fetch = require('node-fetch')

exports.handler = async function () {
    //Defining the RUL
    const POKE_API = 'https://pokeapi.co/api/v2/pokemon/charmander'
    
    //define a response
    const response = await fetch(POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}