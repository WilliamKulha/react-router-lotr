import React from 'react';
import './App.css';
import InfoContainer from './Containers/InfoContainer/InfoContainer'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <InfoContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
