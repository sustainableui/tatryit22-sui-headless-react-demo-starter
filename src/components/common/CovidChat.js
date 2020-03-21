import { useEffect } from 'react';

const CovidChat = () => {
  useEffect(() => {
    window.bChat = {
      "showChatNote": false,
      'image': 'https://covid.chat/assets/img/logo.png',
      'text': 'Dôležité informácie o koronavíruse (COVID-19)',
      "autoOpen": false,
      "noAutoInit": false,
      "noHistory": true,
      "exitButton": true,
      "skipWelcome": true,
      "force": true,
      "ref": "welcome"
    };
    (function (d, s, id) {
      var js, bjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.async = true; js.id = id;
      js.src = "https://covid.chat/chat.js";
      bjs.parentNode.insertBefore(js, bjs);
    }(document, 'script', 'bmedia'));
  });

  return "";
}

export default CovidChat;