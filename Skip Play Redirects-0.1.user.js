// ==UserScript==
// @name         Skip Play Redirects
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically skip play redirects on m.example.com
// @author       Mike
// @match        *://m.drtuber.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Use regex to match the pattern /play/ followed by numbers and optional query parameters
    var playRedirectRegex = /\/play\/(\d+)(\?.*)?$/;

    var currentUrl = window.location.href;

    // Check if the current URL matches the play redirect pattern
    var match = playRedirectRegex.exec(currentUrl);
    if (match) {
        // Redirect to the /video/ URL with the captured numbers
        var newUrl = 'https://m.drtuber.com/video/' + match[1] + '/';
        window.location.replace(newUrl);
    }
})();
