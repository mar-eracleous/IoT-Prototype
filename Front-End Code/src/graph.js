import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
//import NewWindow from 'react-new-window'
//https://codepen.io/danbuda/post/a-react-navbar-component

class graph extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bike lock and Tracker</h1>
        </header>
		
		<nav>
  <div className="navWide">
      <div className="wideDiv">
          <a href="App.js"> Home</a>
          <a href="graph.js">Graph</a>
          <a href="lock.js">Lock</a>
        </div>
    </div>
  
</nav>
		
        <p className="App-intro">
			sdfsfsfjrthstrhtys   trtrssy
	   </p>
      </div>
    );
  }
}

export default graph;