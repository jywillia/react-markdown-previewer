// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import action type constants
import { EDITOR_VIEW, PREVIEWER_VIEW } from "../redux/actionTypes.js";

// import child components for presentation
import Editor from "./Editor";
import Previewer from "./Previewer";

// app's presentational component
class MarkdownPreviewer extends React.Component {
    render() {
        if ( this.props.view === PREVIEWER_VIEW ) {
            return (
                <div id="markdown-previewer" className="container-fluid"> {/* container div to wrap child component */}
                    <Previewer /> {/* render just 1 child the previewer output */}
                </div>                
            );
        } else if ( this.props.view === EDITOR_VIEW ) {
            return (
                <div id="markdown-previewer" className="container-fluid"> {/* container div to wrap children */}
                    <Editor /> {/* render just 1 child the editor input */}
                </div>
            );
        } else {
            return (
                <div id="markdown-previewer" className="container-fluid">
                    {/* <div id="markdown-previewer" className="container-fluid">  {/* container div to wrap component, didn't like the comment before the div */}
                    {/* textarea element for user input */}
                    <div className="row">
                        <Editor /> {/* import editor component for user input */}
                        <Previewer /> {/* import previewer component to output converted user input */}
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

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, null )(MarkdownPreviewer)