
function shot(url, path, callback, scope)
{
	var page = new WebPage();

	page.viewportSize = {
	    width: 1280,
	    height: 800
	};

	page.open(url, function (status) {

		if (status !== 'success') {
			console.log('ERROR: Failed to open web page at ' + url);
			return callback.call(scope || {}, false);
		}

	    page.render(path);
	    return callback.call(scope || {}, true);
	});
}

function cleanFilename(string)
{
	return string.replace(/[^0-9a-zA-Z_.]/g, "_");
}