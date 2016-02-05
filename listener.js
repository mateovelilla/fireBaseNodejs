var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://comite-workshop01.firebaseio.com/message");
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

myFirebaseRef.on("child_added", function(snapshot, prevChildKey) {
		console.log("-----------------------------------------");
	console.log(snapshot.val());
});