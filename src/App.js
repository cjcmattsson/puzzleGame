import React from 'react';
import Starter from './Components/Starter.js';
import { Main } from './Components/StyledComponents.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <Main>
        <Starter/>
      </Main>
    </div>
  );
}

export default App;
