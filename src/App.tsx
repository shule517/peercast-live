import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ChannelList from './ChannelList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ChannelList />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.tsx</code> and save to reload.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
