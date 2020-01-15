import React from 'react';

const Food = ({ name, picture }) => {
  return (
    <>
      <h3>I love {name}</h3>
      <img src={picture} />
    </>
  );
};

const dishes = [
  {
    name: 'kimchi',
    picture: 'https://www.rotinrice.com/wp-content/uploads/2011/09/NapaCabbageKimchi-1.jpg',
  },
  {
    name: 'ramen',
    picture:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=480:*',
  },
  {
    name: 'samgiopsal',
    picture: 'https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG',
  },
  {
    name: 'chukumi',
    picture: 'http://www.yorivery.com/data/goods/16/10/43/1000000171/1000000171_detail_08.jpg',
  },
];

function App() {
  return (
    <div className="App">
      {dishes.map(({ name, picture }) => (
        <Food name={name} picture={picture} />
      ))}
    </div>
  );
}

export default App;
