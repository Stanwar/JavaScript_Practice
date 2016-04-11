//
// Custom Events : We created a custom event framework. We can also use native node events too
//
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log("Hello from the other side!!");
});

emtr.on('greet', function(){
	console.log("Hello from the otter side!!!");
});

console.log("Hello, starting up ");
emtr.emit('greet');