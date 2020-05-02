// import action type constants
import { UPDATE_INPUT, DEFAULT_VIEW, EDITOR_VIEW, PREVIEWER_VIEW } from "./actionTypes.js";

// set new input state
export const updateInput = ( event ) => ({
    type: UPDATE_INPUT,
    input: event.target.value    
})

// default view
export const defaultView = () => ({
    type: DEFAULT_VIEW
})

// editor full screen view
export const editorView = () => ({
    type: EDITOR_VIEW
})

// previewer full screen view
export const previewerView = () => ({
    type: PREVIEWER_VIEW
})