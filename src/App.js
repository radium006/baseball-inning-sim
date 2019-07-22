import React from 'react';
import Buttons from './components/Buttons'
import Container from 'react-bootstrap/Container'
import './App.css'


function App() {
  return (
    <Container>
    <div className="main-page">
      <h1>John Parmer's Baseball Inning Simulator</h1>
      <Buttons />
    </div>
    </Container>
  );
}

export default App;
