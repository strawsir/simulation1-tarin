import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList:[]
    }
  }

componentDidMount(){
  axios.get('./api/inventory').then(res => {
    console.log(res)
    this.setState({inventoryList: res.data})
  })
}


  render() {
    return (
      <div className="App">
      <Dashboard inventoryList={this.state.inventoryList}/>
      <Form getAll={this.state.componentDidMount}/>
      <Header/>
      </div>
    );
  }
}

export default App;
