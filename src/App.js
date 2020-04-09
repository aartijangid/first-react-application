import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      
      <EventBind />

      <Counter />

      <Message />

      {<Greet name='Aarti' hobby='Painting'>
        <p >This is a child of Greet component</p>
        </Greet>}
      {<Greet name='Swapnil' hobby='Video Games'>
        <button>Play</button>
        </Greet>}
      {<Greet name='Meghna' hobby='Social Media'></Greet>}
      {<Welcome name='Aarti' hobby='Painting'></Welcome>}
      {<Welcome name='Swapnil' hobby='Video Games'></Welcome>}
      {<Welcome name='Aarti' hobby='Painting'></Welcome>}

      <Hello />
    </div>
  );
}

export default App;
