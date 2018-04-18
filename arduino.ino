#include <SPI.h>
#include <WiFi101.h>
#define PubNub_BASE_CLIENT WiFiClient
#include <PubNub.h>

//Set the pin for the solenoid
int solenoidPin = 9;

//Setting WiFi network name and password
char ssid[] = "test";
char pass[] = "a1b2c3d4e5";
int status = WL_IDLE_STATUS;

//Set pubnub subkey and pubkey, and channel used
char pubkey[] = "pub-c-7c3d058e-844d-4973-8967-cee0397aa093";
char subkey[] = "sub-c-fb1f3c0c-3e5b-11e8-a2e8-d2288b7dcaaf";
char channel[] = "iotchannel";

void setup() {

  pinMode(solenoidPin, OUTPUT);
    
  Serial.begin(9600);
  //Connect to WiFi
    while (status !=WL_CONNECTED) {
        Serial.print("Attempting to connect to network…");
        status = WiFi.begin(ssid, pass);
        delay(1000);
        }
    Serial.print("SSID:");
    Serial.println(WiFi.SSID());

    //PubNub
    PubNub.begin(pubkey, subkey);
    Serial.println("PubNub set up");

}

void loop() {
  
  //Set client
  PubSubClient *client;

  //Subscribe on PubNub channel
  client = PubNub.subscribe(channel);

  if (!client) {
    Serial.println("subscription error");
    delay(1000);
    return;
  }
  Serial.println("Received: ");
  //A string to hold the characters send in the serial monitor from pubnub
  String aString; 
  while (client->wait_for_data()) {
    char c = client->read();
    
    //Doesn't show the extra characters in the Serial Monitor
    if(c != ']' && c != '['){
      if(c != '"'){
        aString += c;
      }
    }    
    
  }
  
  client->stop();
  Serial.println(aString);
 
  //if the string received in the serial monitor equals to "unlock", unlock the lock
  if (aString == "unlock") {
      digitalWrite(solenoidPin, HIGH);
       Serial.println("Unlocked!");

    }
  //if the string received in the serial monitor equals to "lock", lock the 
  else if (aString == "lock") {
      digitalWrite(solenoidPin, LOW);
       Serial.println("Locked!");

   }
}
