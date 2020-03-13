import { SET_USERNAME } from '../actions/types';

const initialState = {
    results: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_USERNAME:
            console.log(action.payload.data);
            return {
                ...state,
                results: [action.payload.data]
            };
        default:
            return state;
    }
}
