import React, { Component } from 'react';

class Ped extends Component {
    Calc(){
        var oldd = document.getElementById('old demand').value;
        var oldp = document.getElementById('old price').value;
        var newd = document.getElementById('new demand').value;
        var newp = document.getElementById('new price').value;
        
        var change_in_demand = (newd - oldd) / oldd;
        var change_in_price = (newp - oldp) / oldp;
        var ped = change_in_demand / change_in_price;

        if(ped < 0){
            ped *= -1
        }
        const result_elem = document.getElementById('result');
        if(ped > 1){
            result_elem.innerText = `Your ped is ${ped} and it's elastic`;
        }
        if(ped < 1){
            result_elem.innerText = `Your ped is ${ped} and it's inelastic`;
        }
        if(ped === 1){
            result_elem.innerText = `Your ped is ${ped} and it's unitary`;
        }
    
    }
    
    render() { 
        return ( 
            <>
            <h1 id="heading">Price elasticity of demand calculator</h1>
            <h3>Old values:</h3>
            <label style={{paddingLeft:"7.5%"}}>old demand</label>
            <input style={{marginLeft:"10px"}} type="number" id="old demand"/><br></br>
            <label style={{paddingLeft:"7.5%"}}>old price</label>
            <input style={{marginLeft:"10px"}} type="number" id="old price"/>

            <h3>New values:</h3>
            <label style={{paddingLeft:"7.5%"}}>new demand</label>
            <input style={{marginLeft:"10px"}} type="number" id="new demand" /><br></br>
            <label style={{paddingLeft:"7.5%"}}>new price</label>
            <input style={{marginLeft:"10px"}} type="number" id="new price" /><br></br>

            <button style={{marginLeft:"5%"}} onClick={this.Calc}>Calculate</button>

            <p id="result" />
            </>
         );
    }
}
 
export default Ped;