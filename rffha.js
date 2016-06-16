// ==UserScript==
// @name         Remove footer from hastexo academy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove footer from hastexo academy
// @author       Nicolas Borboën
// @match        https://academy.hastexo.com/courses/*
// @downloadURL  https://raw.githubusercontent.com/ponsfrilus/rffha/master/rffha.js
// @updateURL    https://raw.githubusercontent.com/ponsfrilus/rffha/master/rffha.js
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
