
var url  = phantom.args[0];
var path = phantom.args[1];

if (!url) {
	console.log('ERROR: No url specified');
	phantom.exit(1);
}

if (!path) {
	console.log('ERROR: No destination path specified');
	phantom.exit(1);
}

phantom.injectJs('./functions.js');

shot(url, path, function(success){
	phantom.exit(success ? 0 : 1);
});