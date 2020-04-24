// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { updateInput } from '../redux/actions';

// import marked library api
import marked from 'marked';

// app's presentational component
class MarkdownPreviewer extends React.Component {
    constructor( props ) {
        super( props );        

        this.onChange = this.onChange.bind( this );
        this.convert = this.convert.bind( this );
    }

    // onChange listener handles user input in textarea then updates preview
    onChange() {                
        this.props.updateInput();        
    }

    // stateless function to convert input to html
    convert() {
        return {__html:marked(this.props.input)};
    }

    render() {
        return (            
            <div id="markdown-previewer" className="container-fluid">  {/* container div to wrap component, didn't like the comment before the div */}
                {/* textarea element for user input */}
                <div className="row">
                    {/* textarea element with label for user input */}
                    <label for="editor">Markdown editor: enter your markdown here.</label>
                    <textarea id="editor" className="col-6" onChange={this.updateInput}>{this.props.input}</textarea>
                    {/* output element with label for converted user input */}
                    <label for="preview">Preview of Markdown:</label>
                    <div id="preview" className="col-6" dangerouslySetInnerHTML={this.convert()}></div>
                </div>                
            </div>
        );
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
        updateInput: () => dispatch( updateInput() )        
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(MarkdownPreviewer)