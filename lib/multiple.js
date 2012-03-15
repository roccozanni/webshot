
var config_file  = phantom.args[0];

if (!config_file) {
	console.log('ERROR: No config_file specified');
	phantom.exit(1);
}

var fs = require('fs');

if (!fs.exists(config_file)) {
	console.log('ERROR: config_file does not exists');
	phantom.exit(1);
}

phantom.injectJs(config_file);

if (typeof config === 'undefined') {
	console.log('ERROR: config_file must define the "config" variable');
	phantom.exit(1);	
}

phantom.injectJs('./dateformat.js');
phantom.injectJs('./functions.js');

var urls 	 = config.urls || [];
var save_dir = config.save_dir || "/tmp" ;

function processUrl (url) {
	if (!url) {
		console.log("Done");
		return phantom.exit(0);
	}

	var path = save_dir + "/" + cleanFilename(url) + "/" + (new Date()).format("yyyymmdd_HHMMss") + ".jpg";

	console.log("Processing: " + url);
	console.log("    Saving: " + path);

	shot(url, path, function(success){
		processUrl(urls.shift());
	});
}

processUrl(urls.shift());