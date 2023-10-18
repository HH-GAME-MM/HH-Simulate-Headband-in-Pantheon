// ==UserScript==
// @name         HH Simulate Headband in Pantheon
// @version      0.8
// @description  Simulate wearing a Headband in Pantheon
// @author       -MM-
// @match        https://*.hentaiheroes.com/pantheon-pre-battle.html?id_opponent=*
// @match        https://nutaku.haremheroes.com/pantheon-pre-battle.html?id_opponent=*
// @match        https://www.comixharem.com/pantheon-pre-battle.html?id_opponent=*
// @match        https://www.pornstarharem.com/pantheon-pre-battle.html?id_opponent=*
// @match        https://www.gayharem.com/pantheon-pre-battle.html?id_opponent=*
// @run-at       document-end
// @namespace    https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon
// @updateURL    https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon/raw/main/HH-Simulate-Headband-in-Pantheon.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Simulate-Headband-in-Pantheon/raw/main/HH-Simulate-Headband-in-Pantheon.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    hero_data.damage *= 1.25;

    setTimeout(function() {
        const span = document.querySelector('.pantheon-team-panel.player-panel .player_stats #stats-damage');
        if(span !== null) {
            span.setAttribute('style', 'color:rgb(255, 47, 47);');
            span.innerHTML = number_format_lang(hero_data.damage, 0);
        }

        setTimeout(addWarning, 1, 0);
        function addWarning(i) {
            const div = document.querySelector('.pantheon-team-panel.opponent-panel .matchRating');
            if(div !== null) {
                div.innerHTML += '<div style="position:absolute;margin-top:-70px;width:120px;font-size:14px;color:#ff2f2f;" tooltip="Make sure that you do not use the headband script while using a real headband. Otherwise your attack is increased twice!">Headband Script is enabled</div>';
            } else {
                if(i < 100) setTimeout(addWarning, 10, i + 1);
            }
        }
    }, 1);
})();
