Webshot - Webpage screenshotting tool
=============================

Dependencies
-----

PhantomJS (http://www.phantomjs.org) must be installed and in the system PATH

Usage
-----

#### Single page mode

This is the simplest mode, you can use it to grab a screenshot of a single web page. For example, grabbing a screenshot of the Github homepage:

    ./shot "http://www.github.com" "/tmp/github.jpg"

#### Multiple page mode

This mode is useful for grabbing screenshot of multiple web pages. You can also use the script in a cron task (for example for periodically grab and archive).

You need only a simple configuration file like this:

    var config = {
        save_dir: "/path/to/archive/directory",
        urls: [ "http://www.github.com", "http://www.roccozanni.net" ]
    };

that configures the script with:
- directory used for archiving screenshots
- urls of the web pages to grab

    ./shot "/path/to/configuration.js"

The screenshots will be saved in the archive directory, grouped by url, and with a timestamp-like filename for easy sort.


Troubleshooting
-----

Tested on:
- MacOS X 10.7 with PhantomJS 1.4.1