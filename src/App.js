import React from 'react';

const Food = ({ favourite }) => {
  return <h3>I love {favourite}</h3>;
};

function App() {
  return (
    <div className="App">
      <h1>HELLO !!!</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;
