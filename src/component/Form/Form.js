import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl:'',
            productName:'',
            price:0
        }
    }
    
   
    cancelInput(){
       this.setState({
           imageUrl:'',
           productName:'',
           price:''
       })
    }

    render(){
        console.log(this.cancelInput)
        return(
            <div>
                <input value={this.state.imageUrl} onChange={(e)=>this.props.img(e.target.value)}></input>
                <input value={this.state.productName} onChange={(e)=>this.props.name(e.target.value)}></input>
                <input value={this.state.price} onChange={(e)=>this.props.price(e.target.value)}></input>
                <button onClick={()=>this.cancelInput()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}
export default Form