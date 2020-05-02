// export initial state const for first load
export const initialInput = 
`# This creates h1 style headers, don't forget the space!

## This creates h2 style sub-headers, I'm a bit smaller.

### Sub-headers get smaller, but I'm not the smallest.

Display some code inline with back ticks like this \`<ComponentName />\` to illustrate code or command line input.

Display larger blocks of code with triple back ticks, don't use single quotes
\`\`\`
// This looks like code to me
class MyComponent extends React.Component {
    constructor( props ) {
        super( props );

        // bind this to my handler function
        this.onClick = this.onClick.bind( this );
    }

    // on click handler
    handleClick() {
        this.props.actionDispatcher();
    }

    // render component
    render() {
        return(
            <div><button onClick={this.handleClick}></div>
        );
    }
}
\`\`\`

This is a table header | Another header | Yet another header followed by a divider segment
--- | ----- | ------
number of dashes over 3 don't matter | this is the table content btw | here is some more content for you
we can add some more here | and here to | BUT NOT HERE, NOT EVER...JK :) even here

#### Do you like lists, well this is how to make them with markdown!

- unordered list start with \`-\`, \`+\`, or \`*\`
- don't for get the space after
+ switching doesn't matter
* it's still the same list unless you switch to ordered lists
1. the number only matters on the first one
1. the rest fall in line
5. despite what number you use
1. just use a number followed by a \`.\` and a space
- this breaks the last list
 - nested list work like this
 - can we go further?
   - I think we can
     + maybe even further

> Block Quotes are done like this
> this is the next line in the block quote

**Wait** can we do more like *bold* to emphasize text.
_italic_ would be nice too.
**_both_** would be too crazy...
but not as crazy as puns with markdown: ~~eyed~~

You can go to the documentation at [your link text goes here!](https://github.github.com/gfm/), to find all the things you can do with markdown.

But I don't like to type, how about images to save myself a thousand keypresses?
We can do that too like this:

![FCC logo with text: alt text goes here and the source follows](https://jywillia.github.io/react-markdown-previewer/fcc_primary_large.png)`