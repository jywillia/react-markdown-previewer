// import action type constants
import { UPDATE_INPUT } from "./actionTypes.js";

// set new input state
export const updateInput = ( event ) => ({
    type: UPDATE_INPUT,
    input: event.target.value    
})