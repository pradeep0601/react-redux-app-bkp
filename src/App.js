import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from '../src/components/comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Comment author="Pradeep">
        So, what do you think about redux?
        </Comment>
      </div>
    );
  }
}

export default App;
