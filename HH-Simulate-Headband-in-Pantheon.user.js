// ==UserScript==
// @name         HH Simulate Headband in Pantheon
// @version      0.3
// @description  Simulate wearing a Headband in Pantheon
// @author       -MM-
// @match        https://www.hentaiheroes.com/pantheon-pre-battle.html?id_opponent=*
// @match        https://nutaku.haremheroes.com/pantheon-pre-battle.html?id_opponent=*
// @run-at       document-end
// @namespace    https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon
// @updateURL    https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon/raw/main/HH-Simulate-Headband-in-Pantheon.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon/raw/main/HH-Simulate-Headband-in-Pantheon.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let div = document.querySelector('#pre-battle #player-panel .fighter-stats .stat .carac-value div');
    div.innerHTML = parseFloat(div.innerHTML.replace(',','.').replace('K','')) * 1000 * 1.25;
})();
