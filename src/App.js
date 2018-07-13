import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


class App extends Component {
  constructor(){
    super()
    this.state={
      imageUrl:'',
      productName:'',
      price:0
    }
  }
 
  ImageURL(val){
    this.setState({imageUrl:val})
}
updatename(val){
  this.setState({productName:val})
}
updatePrice(val){
  this.setState({price:val})
}
  render() {
    return (
      <div className="App">
          <Dashboard/>
          <Form img={this.ImageURL.bind(this)} name={this.updatename.bind(this)} price={this.updatePrice.bind(this)}/>
          <Header />

      </div>
    );
  }
}

export default App;
