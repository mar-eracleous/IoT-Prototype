import React, { Component } from 'react';
import logo from './logo.jpg'; 
import './App.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import PubNubReact from 'pubnub-react';

export default class extends Component {
    constructor(props) {
        super(props);
	//Initialise PubNub 
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-7c3d058e-844d-4973-8967-cee0397aa093',
            subscribeKey: 'sub-c-fb1f3c0c-3e5b-11e8-a2e8-d2288b7dcaaf'
        });
        this.pubnub.init(this);
		
		this.lock = "lock";
		this.unlock = "unlock";
    }
	
	//Publish messages on PubNub channel when Lock button is clicked
	buttonOnClickHandler = (e) => {        
		this.pubnub.publish({
			channel: 'iotchannel',
			message: this.lock,
			callback: function(m) {
				console.log(m);
          		}
        	});

      	};
	  
	 //Publish messages on PubNub channel when Unlock button is clicked
	 buttonOnClickHandler2  = (e) => {
       	 	this.pubnub.publish({
         		channel: 'iotchannel',
          		message: this.unlock,
          		callback: function(m) {
            			console.log(m);
          		}
        	});

      	};
 
    	render() {
        	return (
     
			//Create a header
			<div className="App">
				<header className = "App-header">
					<img src = {logo} className="App-logo" alt = "logo" />
					<h1 className = "App-title">Bike lock and Tracker</h1>
				</header>

				//Decorative Line
				<div className = "navWide"></div>

				//Create a section for the main body
				<section className = "App-intro">
					<h1 class = "heading">Lock Control</h1>
					<button onClick = {this.buttonOnClickHandler} class = "on">Lock</button>
					<button onClick = {this.buttonOnClickHandler2} class = "off">Unlock</button>
				</section>



		      </div>
	   	);
    
	}
}
