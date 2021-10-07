import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Harnas from './component/Harnas';


class ConverHarnas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Harnas: 0,
            Eur: 0,
        };
        this.changeHarnas = this.changeHarnas.bind(this)
    }

    changeHarnas(value,scale){
        switch(scale){
            case "Eur":
                this.setState({Harnas: value * 1.84 , Eur: value});
                return;
            case "Harnas":
                this.setState({Eur: value * 0.56, Harnas: value});
                return;
        }
    }

    render(){
        return (
        <>
       <Harnas
           beerName = "Harnas"
           beerValue = {this.state.Harnas}
           changeHarnas = {this.changeHarnas}
       />
       <Harnas
           beerName = "Eur"
           beerValue = {this.state.Eur}
           changeHarnas = {this.changeHarnas}
       />
        </>
        );
    }
}

ReactDOM.render(<ConverHarnas />, document.getElementById("root"))