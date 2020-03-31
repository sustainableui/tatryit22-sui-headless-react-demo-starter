import PropTypes from 'prop-types';
import { useEffect } from 'react';

const CovidChat = props => {
  useEffect(() => {
    window.bChat = {
      "showChatNote": false,
      'image': 'https://covid.chat/assets/img/logo.png',
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
  }, []);

  let chat = document.getElementById('botmedia-chat-widget');
  if (chat) {
    if (!props.visible) {
      chat.style.visibility = "hidden";
    }
    else {
      chat.style.visibility = "visible";
    }
  }

  return "";
}

CovidChat.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default CovidChat; 