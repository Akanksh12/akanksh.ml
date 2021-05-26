import React, { Component, useState } from 'react';
import Confetti from 'react-confetti';
import Happybday from './hbds.mp3'
import first from './1.jpeg'
import second from './2.jpeg'
import third from './3.jpeg'
import fourth from './4.jpeg'

class Birthday extends Component {
    render() { 
        var context = new AudioContext();
        function handleClick(){
            context.resume();
            const sound = new Audio(Happybday);
            sound.play();
        }
        return ( 
            <>
            <h1 id="heading">Happy birthday Chandan!</h1>
            <p>Many more happy returns of the day!</p>
            <button onClick={handleClick} className="bday">click me for music</button>
            <img src="https://akanksh.ml/bday.gif" style={{marginLeft:"auto", marginRight:"auto", width:"50%", display:"block", marginBottom:"100px"}} />
            <p>Memories:</p>
            <div className="images">
                <img src={first} className="images"/>
                <img src={second} className="images"/>
                <img src={third} className="images"/>
                <img src={fourth} className="images"/>
            </div>
            <Confetti id="confetti"/>
            </>
         );
    }
}
 
export default Birthday;