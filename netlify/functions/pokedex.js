//Our serverless function runs here and calls the API without the need for a server-side code workspace

//tell program we want to run node fetch as installed with NPM
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
    const eventBody = JSON.parse(event.body)
    //Defining the API, and making it able to shift between Kanto og Hoenn with string interpolation (just like ${ ... })
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region

    
console.log(event)

    //define a response
    const response = await fetch(POKE_API)
    const data = await response.json()

    //Asking just to fetch for somethign specific in the API (the entries)
    return {
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries
        })
    }
}