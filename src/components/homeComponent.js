import React, { Component } from 'react';
import Subheading from './subComponent'
import Text from './textComponent'

class Home extends Component {
    render() { 
        return ( 
            <>
            <h1 id="heading">Akanksh</h1>
            <Subheading text="About:" />
            <Text text="Hey! I'm just making this website :)"/>
            <code>And learning React.js</code>
            <br></br>
            <a href="/projects" >Click me to see my projects</a>
            <br></br>
            <a href="/old/index.html">old version of this site</a>
            </>
         );
    }
}
 
export default Home;