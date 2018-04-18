import React, { Component } from 'react';
import logo from './logo.jpg'; 
import './App.css'; // imports the css
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import PubNubReact from 'pubnub-react';

export default class extends Component {
    constructor(props) {
        super(props);
		// connects to pubnub 
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-7c3d058e-844d-4973-8967-cee0397aa093',
            subscribeKey: 'sub-c-fb1f3c0c-3e5b-11e8-a2e8-d2288b7dcaaf'
        });
        this.pubnub.init(this);
		
		this.state = {
			unlocked: false
		};
		
		this.lock = "lock";
		this.unlock = "unlock";
    }
	
	handleToggle = () => this.setState({
		unlocked: !this.state.unlocked
		});
	
		// sends the unlock message to pubnub to allow the lock to unlock
	buttonOnClickHandler = (e) => {
        
		this.pubnub.publish({
          channel: 'iotchannel',
          message: this.lock,
          callback: function(m) {
            console.log(m);
          }
        });

      };
	  
	  // sends the lock message to pubnub to allow the lock to lock
	  buttonOnClickHandler2  = (e) => {
        this.pubnub.publish({
          channel: 'iotchannel',
          message: this.unlock,
          callback: function(m) {
            console.log(m);
          }
        });

      };
 
    componentWillMount() {
        this.pubnub.subscribe({
            channels: ['iotchannel'],
            withPresence: true
        });
 
        //this.pubnub.getMessage('iotchannel', (msg) => {
          //  console.log(msg);
        //});
 
        this.pubnub.getStatus((st) => {
        
        });
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['iotchannel']
        });
    }
 
    render() {
     //   const messages = this.pubnub.getMessage('iotchannel');
        return (
            

     
 <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bike lock and Tracker</h1>
        </header>

		
		<nav>
  <div className="navWide">
      <div className="wideDiv">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
    </div>
  
</nav>
			
		<section className="App-intro">
			<h1 class = "heading">Lock Control</h1>
			  <button onClick={this.buttonOnClickHandler} class = "on">Lock</button>
			  <button onClick={this.buttonOnClickHandler2} class = "off">Unlock</button>
			</section>
			
			
		
      </div>
	   );
    
}
}
        
		
		
		
		
     

      


