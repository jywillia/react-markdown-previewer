// import react dependency
import React from 'react';
import { connect } from 'react-redux';

// import action creators for mapDispatchToProps
import { defaultView, previewerView } from '../redux/actions';

// import action types for conditional rendering
import { PREVIEWER_VIEW } from '../redux/actionTypes';

// import marked library api
import marked from 'marked';

// import dom purify library to sanitize converted html
import DOMPurify from 'dompurify';

// import css style rules
import '../App.css';

// app's presentational component
class Previewer extends React.Component {
    constructor( props ) {
        super( props );        

        // bind this to function
        this.convert = this.convert.bind( this );
        this.expandPreviewer = this.expandPreviewer.bind( this );
        this.defaultPreviewer = this.defaultPreviewer.bind( this );
    }

    // stateless function to convert input to html
    convert( value ) {
        return { __html:DOMPurify.sanitize( marked( value, { gfm: true, breaks: true } ) ) };
        // return { __html:marked( value, { gfm: true, breaks: true } ) };
    }

    // onClick listener handles when user wants previewer maximized
    expandPreviewer() {
        this.props.previewerView();
    }

    // onClick listener handles when user wants editor and previewer displayed
    defaultPreviewer() {
        this.props.defaultView();
    }

    render() {
        if ( this.props.view === PREVIEWER_VIEW ) {
            return (
                <div className="col-11 container" id="right-col"> {/* output element with header container for converted user input */}
                    {/* row to align header with content div */}               
                    <div className="row justify-content-center">
                        {/* header with title and icon */} 
                        <div id="preview-header" className="row justify-content-between">
                            <div className="col-4">Previewer</div>
                            <i className="fas fa-compress-arrows-alt col-0.5 btn btn-sm btn-secondary" onClick={this.defaultPreviewer}></i>
                        </div>
                        {/* preview output for converted markup */}
                        <div id="preview" dangerouslySetInnerHTML={this.convert( this.props.input )}></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-6 container" id="right-col"> {/* output element with header container for converted user input */}
                {/* row to align header with content div */}
                    <div className="row justify-content-center">
                        {/* header with title and icon */}
                        <div id="preview-header" className="row justify-content-between">
                            <div className="col-4">Previewer</div>
                            <i className="fas fa-expand-arrows-alt col-0.5 btn btn-sm btn-secondary" onClick={this.expandPreviewer}></i>
                        </div>
                        {/* preview output for converted markup */}
                        <div id="preview" dangerouslySetInnerHTML={this.convert( this.props.input )}></div>
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
        previewerView: () => dispatch( previewerView() ),
        defaultView: () => dispatch( defaultView() )
    }
}

// export component as default with connected state and dispatch - can rename component when imported
export default connect( mapStateToProps, mapDispatchToProps )(Previewer)