// import react-redux dependancies
import React from "react";
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { updateInput } from '../redux/actions';

// import marked library api
import marked from 'marked';

// import dom purify library to sanitize converted html
import DOMPurify from 'dompurify';

// app's presentational component
class MarkdownPreviewer extends React.Component {
    constructor( props ) {
        super( props );        

        this.handleChange = this.handleChange.bind( this );
        this.convert = this.convert.bind( this );
    }

    // stateless function to convert input to html
    convert( value ) {
        return { __html:DOMPurify.sanitize( marked( value, { gfm: true, breaks: true } ) ) };
    }

    // onChange listener handles user input in textarea then updates preview
    handleChange( event ) {                
        this.props.updateInput( event );        
    }

    render() {
        return (            
            <div id="markdown-previewer" className="container-fluid">  {/* container div to wrap component, didn't like the comment before the div */}
                {/* textarea element for user input */}
                <div className="row">
                    {/* textarea element with label for user input */}
                    <div className="col-6 container" id="left-col">
                      {/*<label htmlFor="editor">Markdown editor: enter your markdown here.</label>*/}
                      <textarea id="editor" type="text" className="form-control" onChange={this.handleChange} defaultValue={this.props.input}></textarea>
                    </div>
                                        
                    {/* output element with label for converted user input */}
                    <div className="col-6 container-fluid" id="right-col">
                      {/*<label htmlFor="preview">Preview of Markdown:</label>*/}
                      <div id="preview" dangerouslySetInnerHTML={this.convert( this.props.input )}></div>
                      {/*<div id="inputPreview">{this.convert( this.props.input )}</div>*/}        
                    </div>                    
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
        updateInput: event => dispatch( updateInput( event ) )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(MarkdownPreviewer)