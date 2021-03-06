// import action creators
import { UPDATE_INPUT, DEFAULT_VIEW, EDITOR_VIEW, PREVIEWER_VIEW } from "../actionTypes.js";

// import initial state for initial textarea on first load
import { initialInput } from './initialInput.js';

// constant for initial state
const initialState = {
    input: initialInput,
    view: DEFAULT_VIEW   
};

// markdown previewer component reducer returns new state with new input and same view or returns same input with new view style or returns original state
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        // update user input to state
        case UPDATE_INPUT: {            
            return ({
                input: action.input,
                view: state.view                
            });
        }
        // switch to default 2 window view
        case DEFAULT_VIEW: {
            return ({
                input: state.input,
                view: DEFAULT_VIEW
            });
        }
        // editor full screen view
        case EDITOR_VIEW: {
            return ({
                input: state.input,
                view: EDITOR_VIEW
            });
        }
        // previewer full screen view
        case PREVIEWER_VIEW: {
            return ({
                input: state.input,
                view: PREVIEWER_VIEW
            });
        }
        // default no action return current state
        default:
            return state;
    }
}