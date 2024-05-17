// ==UserScript==
// @name         Skip Play Redirects
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically skip play redirects on m.example.com
// @author       Justauser33
// @match        *://m.drtuber.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Check if the URL ends with ?from=video_bottom
    if (window.location.search === '?from=video_bottom') {
        // Stop the loading of the page
        window.stop();
    }
})();
