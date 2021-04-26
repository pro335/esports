import {
    RECEIVE_GAMES,
    RECEIVE_CATEGORY,
    ADD_GAME,
    DEL_GAME
} from "../constants/ActionTypes";


const initialState = {
    games: [],
    category:[]
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEL_GAME:
            return {...state,games: state.games.filter(item => item.id !== action.id)}
        case ADD_GAME:
            return { ...state,
                games: [...state.games,action.game]};
        case RECEIVE_GAMES:
            return { ...state,
                games: action.games};
        case RECEIVE_CATEGORY:
            return { ...state,
                category: action.category};
        default:
            return state;
    }
};
export default gameReducer;