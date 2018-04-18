

      var pubnub = new PubNub({
          publishKey: 'pub-c-7c3d058e-844d-4973-8967-cee0397aa093',
          subscribeKey: 'sub-c-fb1f3c0c-3e5b-11e8-a2e8-d2288b7dcaaf'
      });

      channel: 'iotchannel'

      var button = document.querySelector("button.on");

      var lock = true;

      button.addEventListener("click", function(e) {

        pubnub.publish({
          channel: channel,
          message: {blink: lock},
          callback: function(m) {
            console.log(m);
            lock = !lock;
            button.textContent = (lock)? "Lock" : "Unlock";
          }
        });

      })
	