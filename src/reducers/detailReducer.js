const initState = {
    pokemon: {
        name: [],
    },
    screen: {
        results: []
    },
    isLoading: true
}

const detailReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                pokemon: action.payload.pokemon,
                screen: action.payload.screen
            }
            case 'LOADING_DETAIL':
                return {
                    ...state,
                    isLoading: true,
                }
            default: {
                return {...state}
            }
    }
}
export default detailReducer