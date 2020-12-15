const initState = {
    currentGen : [],
    lastGen : [],
}

const pokeReducer =  (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON':
            return {...state}
        default :
        return {...state}
    }
}