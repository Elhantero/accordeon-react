import React, { Component } from 'react';
import './App.css';

import Accordion from "./Accordion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion >
          <div label="Alligator Mississippiensis" isOpen>
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
          </div>
          <div label="Alligator Sinensis">
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
            <h2>1</h2>
          </div>
        </Accordion>
      </div>
    );
  }
}

export default App;
