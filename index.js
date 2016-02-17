var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://comite-workshop01.firebaseio.com/");
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (msg) {
	myFirebaseRef.child("message")
	.push()
	.set({"name":"node","message":msg});
});

myFirebaseRef.on("child_changed", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

myFirebaseRef.child('message').on("child_added", function(snapshot, prevChildKey) {
	var mensaje = JSON.parse(JSON.stringify(snapshot.val()));
	console.log(mensaje.name+" dice: "+mensaje.message);
});
