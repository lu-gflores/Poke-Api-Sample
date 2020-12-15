import axios from 'axios'
import {pokemonDetailsURL, searchPokemonURL} from '../api'

export const loadDetails = id = async (dispatch) => {
    dispatch({
        type: 'LOADING_DETAIL'
    });
    const pokeData = await axios.get(pokemonDetailsURL())
}