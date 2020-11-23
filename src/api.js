const baseURL = 'https://pokeapi.co/api/v2/pokemon'

export const pokemonDetailsURL = () => `${baseURL}?limit=20`
export const searchPokemonURL = pokeName => `${baseURL}/${pokeName}`