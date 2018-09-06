import * as React from 'react';
import './App.css';
import SampleForm from './components/SampleForm';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <SampleForm/>
        </header>
      </div>
    );
  }
}
