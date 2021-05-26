import React, { Component } from 'react';

class Text extends Component {
    render() { 
        return ( 
            <p>{this.props.text}</p>
         );
    }
}
 
export default Text;