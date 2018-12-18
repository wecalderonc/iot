var awsIot = require('aws-iot-device-sdk');
// Config
var device = awsIot.device({
   keyPath: "./certs/e40bc2f1cd-private.pem.key",
  certPath: "./certs/e40bc2f1cd-certificate.pem.crt",
    caPath: "./certs/AmazonRootCA1.pem",
      host: "a3nxjph9lc5l6-ats.iot.us-east-1.amazonaws.com"
});

// Connect
device
  .on('connect', function() {
    console.log('Connected');
    // Subscribe to myTopic
    device.subscribe("myTopic");
// Publish to myTopic
    device.publish("myTopic", JSON.stringify({
      key1: 'hello1',
      key2: 'hello2',
      key3: 'hello3'
    }));
  });
// Error



device
  .on('error', function(error) {
    console.log('Error: ', error);
  });


// Receiving a message from any topic that this device is
// subscribed to.
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });
