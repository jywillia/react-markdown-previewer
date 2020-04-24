// import action type constants
import { UPDATE_INPUT } from "../actionTypes";

// set new input state and update preview
export const updateInput = (e) => ({
    type: UPDATE_INPUT,
    input: e.target.value
})