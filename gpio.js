const WebSocket = require("ws");

const ON = 0;
const OFF = 1;

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var tb1 = new Gpio(17, 'out'); 
var tb2 = new Gpio(27, 'out'); 
var tb3 = new Gpio(22, 'out'); 
var tb4 = new Gpio(26, 'out'); 

tb1.writeSync(1);
tb2.writeSync(1);
tb3.writeSync(1);
tb4.writeSync(1);


const ws = new WebSocket("ws://192.168.0.103:3000");
ws.on("open", function open() {

    ws.send("something");

});

ws.on("message", function incoming(data) {

    	if(data === "3") {
		tb1.writeSync(OFF);
	} else if (data === "1") {
		tb1.writeSync(ON);
	}
	
    	if(data === "4") {
		tb2.writeSync(OFF);
	} else if (data === "2") {
		tb2.writeSync(ON);
	}

    	if(data === "5") {
		tb3.writeSync(OFF);
	} else if (data === "6") {
		tb3.writeSync(ON);
	}

    	if(data === "7") {
		tb4.writeSync(OFF);
	} else if (data === "8") {
		tb4.writeSync(ON);
	}

});
