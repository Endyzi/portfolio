import React from 'react';
import Navbar from './components/Navbar';
import ContainerComponent from './components/ContainerComponent';

function App() {
  return (
    <div>
      <Navbar />
      <ContainerComponent>
        <h1>Välkommen till min portfolio!</h1>
        <p>Här kommer din innehåll att synas.</p>
      </ContainerComponent>
    </div>
  );
}

export default App;
