import axios from 'axios'
import {pokemonDetailsURL, searchPokemonURL} from '../api'

export const loadDetails = (id) => async (dispatch) => {
    dispatch({
        type: 'LOADING_DETAIL'
    });
    const pokeData = await axios.get(pokemonDetailsURL(id))
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            pokemon: pokeData.data
        }
    })

}