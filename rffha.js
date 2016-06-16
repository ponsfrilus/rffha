// ==UserScript==
// @name         Remove footer from hastexo academy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nicolas Borboën
// @match        https://academy.hastexo.com/courses/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
     addGlobalStyle('body.view-in-course .wrapper-footer { display: none;} ');
})();
