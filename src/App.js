import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from "./components/User" 

class App extends Component{
  render(){
    return (
      <div className="container">
        <Navbar/>
        <hr/>
        <User
        name="kağan"
        salary="30000"
        />
        <User
        name="ufuk"
        />
      </div>
    )
  }
}

export default App;
