import React from 'react';

export default class VoiceRecognition extends React.Component {

render() {
  // Speech recognition
  try {
    var recognition = new webkitSpeechRecognition();
  } catch (e) {
    var recognition = Object;
  }
  // languaje we going to use
  recognition.lang = 'en-US';
  // mic on untill we decide to stop it
  recognition.continuous = true;
  // dont show the text while we speaking, just wen we stop the mic
  recognition.interimResults = false;
  recognition.onresult = (event) => {
    var txtRec = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      txtRec += event.results[i][0].transcript;
    }
  };
  return (
    <React.Fragment>
    <button onClick={this.recognition.start()}>Start</button>
    <button onClick={this.recognition.stop()}>Stop</button>
    <p>you said: {this.txtRec}</p>
    </React.Fragment>
    );
  }
}
