import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Harnas extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return<>
        <p>{this.props.beerName}</p>
        <input 
        type="text" 
        value={this.props.beerValue} 
        onChange={(event) => {
            this.props.changeHarnas(
                event.target.value, this.props.beerName
                    )
                }
            }/>
        </>
    }
}
export default Harnas;