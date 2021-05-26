import React, { Component } from 'react'

class Rpg extends Component {
    constructor(props){
        super(props);
        this.state = { length: '' };
    }
    changeHandler = (event) => {
        this.setState({length: event.target.value});
    }
    createPassword(){
        var length = document.querySelector('#length').value;
        console.log("using length:",length);
        if (length === 0 || length < 0) {
            window.alert('Please select a integer above 0');
            return;
        }
        var lowercase_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var UPPERCASE_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var digits_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var special_list = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
        
        var touse = [];
        var chars_selected = [];

        var lowercase = document.querySelector('#lowercase').checked;
        var uppercase = document.querySelector('#uppercase').checked;
        var digits = document.querySelector('#digits').checked;
        var special = document.querySelector('#special').checked;

        if (lowercase) {
            touse = touse.concat(lowercase_list);
        }
        if (uppercase) {
            touse = touse.concat(UPPERCASE_list);
        }
        if (digits) {
            touse = touse.concat(digits_list);
        }
        if (special) {
            touse = touse.concat(special_list);
        }
        if (lowercase === false && uppercase === false && digits === false && special === false) {
            touse = touse = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

        }

        var i = 0
        while ( i < length) {
            var index = Math.floor(Math.random() * touse.length | 0);
            var char = touse[index];
            chars_selected.push(char);
            i++;
        }
        var result = chars_selected.join("");
        var result = result.replace(",", "");
        var result_elem = document.querySelector('#output');
        result_elem.innerText = result;
        navigator.clipboard.writeText(result);
    }
    
    render() { 
        return ( 
            <>
            <h1 id="heading">Random Password Generator</h1><br></br>
            <h1>Type in how long you want your password to be</h1>
            <input onChange={this.changeHandler} type="number" id="length"/>
            <p style={{padding:"0"}}>Current length setting: {this.state.length}</p>
            <label>lowercase</label>
            <input type="checkbox" id="lowercase"/><br></br>

            <label>uppercase</label>
            <input type="checkbox" id="uppercase"/><br></br>

            <label>digits</label>
            <input type="checkbox" id="digits"/><br></br>

            <label>special characters</label>
            <input type="checkbox" id="special"/><br></br>
            
            <button onClick={this.createPassword}>Generate</button>

            <p style={{padding:"0", overflow:"hidden"}} id="output" />
            </>
         );
    }
}




export default Rpg;