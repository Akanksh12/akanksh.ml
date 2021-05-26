import React, { Component } from 'react';

class Inputtest extends Component {
    state = { 
        current_key : "",
        value: "",
        code: ""
     }

    handleKey(e){
        this.setState((state) => {
            return{
                current_key: e.keyCode,
                value: "'" + String.fromCharCode(e.keyCode) + "'",
                code: e.code
            }
        })
    }

    render() { 
        return ( 
            <>
            <div id="input">
            <input type="text" id="inputtest" autoFocus onKeyDown={this.handleKey.bind(this)}/>
            <p>value: {this.state.value}</p>
            <p>keyCode: {this.state.current_key}</p>
            <p>code: {this.state.code}</p>
            </div>
            <p style={{top:"99%"}}>If this doesn't work just reload the page.</p>
            </>
         );
    }
}
 
export default Inputtest;