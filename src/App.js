import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './components/store';
import './App.css';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Postform />
          <hr></hr>
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
