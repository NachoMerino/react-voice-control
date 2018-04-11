import React, { Component } from 'react';
import logo from './logo.svg';
import VoiceSynthesizer from './components/VoiceSynthesizer';
//import VoiceRecognition from './components/VoiceRecognition';
import './App.css';




class App extends Component {

  state = {
    voice: 'Fiona',
    text: 'What can I do for you?',
    textToAdd: '',
    pitch: 1.4,
    rate: 1,
  }

  

  addText = (e) => {
    const textToAdd = e.target.value
    this.setState({ textToAdd });
  }

  sayMyText = () => {
    const textToAdd = this.state.textToAdd;
    this.setState({
      text: textToAdd,
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <input type="text" onChange={this.addText}/>
          <button onClick={this.sayMyText}>Make {this.state.voice} Speak</button>
        </div>
        <VoiceSynthesizer
          text={this.state.text}
          voice={this.state.voice}
          pitch={this.state.pitch}
          rate={this.state.rate}/>
        {/*<VoiceRecognition />*/}
      </div>
    );
  }
}

export default App;
