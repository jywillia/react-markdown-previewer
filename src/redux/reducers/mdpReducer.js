// import action creators
import { UPDATE_INPUT } from "../actionTypes";

// import initial state for initial textarea on first load
import { initialInput } from './initialInput.js';

// constant for initial state
const initialState = {
    input: initialInput    
};

// markdown previewer component reducer returns new state with new input or returns new state with updated preview
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case UPDATE_INPUT: {            
            return ({
                input: action.input
            });
        }
        default:
            return state;
    }
}