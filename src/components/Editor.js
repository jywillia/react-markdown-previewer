// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { updateInput, defaultView, editorView } from '../redux/actions';

// import action types for conditional rendering
import { EDITOR_VIEW } from '../redux/actionTypes';

// import css style rules
import '../App.css';

// app's presentational component
class Editor extends React.Component {
    constructor( props ) {
        super( props );        

        // bind this to function
        this.handleChange = this.handleChange.bind( this );
        this.expandEditor = this.expandEditor.bind( this );
        this.defaultEditor = this.defaultEditor.bind( this );       
    }

    // onChange listener handles user input in textarea then updates preview
    handleChange( event ) {                
        this.props.updateInput( event );        
    }

    // onClick listener handles when user wants editor maximized
    expandEditor() {
        this.props.editorView();
    }

    // onClick listener handles when user wants editor and previewer displayed
    defaultEditor() {
        this.props.defaultView();
    }

    render() {
        if ( this.props.view === EDITOR_VIEW ) {
            return (
                <div className="col-11 container-fluid" id="left-col"> {/* textarea element with header container for user input */}
                    <div className="row justify-content-center"> {/* container to line up header and textarea */}
                        <div id="editor-header" className="row justify-content-between"> {/* header container to space apart contents with label and icon */}
                            <div className="col-4">Editor</div>
                            <i className="fas fa-compress-arrows-alt col-0.5 btn btn-sm btn-secondary" onClick={this.defaultEditor}></i>
                        </div>
                        {/* textarea for user input with default input supplied */}
                        <textarea id="editor" type="text" style={{ height: '82vh' }} className="form-control rounded-0" onChange={this.handleChange} defaultValue={this.props.input}></textarea>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-5 container-fluid" id="left-col"> {/* textarea element with header container for user input */}                
                    <div className="row justify-content-center"> {/* container to line up header and textarea */}
                        <div id="editor-header" className="row justify-content-between"> {/* header container to space apart label and icon */}
                            <div className="col-4">Editor</div>
                            <i className="fas fa-expand-arrows-alt col-0.5 btn btn-sm btn-secondary" onClick={this.expandEditor}></i>
                        </div>
                        {/* textarea for user input with default input supplied */}
                        <textarea id="editor" type="text" className="form-control rounded-0" onChange={this.handleChange} defaultValue={this.props.input}></textarea>
                    </div>
                </div>
            );
        }        
    }
}

// convert state from store to props to pass to components 
const mapStateToProps = state => {
    const content = Object.assign( {}, state );
    return content;
};

// connect dispatch to appropriate listener
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch( updateInput( event ) ),
        editorView: () => dispatch( editorView() ),
        defaultView: () => dispatch( defaultView() )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(Editor)