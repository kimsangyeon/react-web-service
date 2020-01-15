import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ name, picture, rating }) => {
  return (
    <>
      <h3>I love {name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const dishes = [
  {
    id: 1,
    name: 'kimchi',
    picture: 'https://www.rotinrice.com/wp-content/uploads/2011/09/NapaCabbageKimchi-1.jpg',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'ramen',
    picture:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=480:*',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'samgiopsal',
    picture: 'https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'chukumi',
    picture: 'http://www.yorivery.com/data/goods/16/10/43/1000000171/1000000171_detail_08.jpg',
    rating: 4.8,
  },
];

function App() {
  return (
    <div className="App">
      {dishes.map(({ id, name, picture, rating }) => (
        <Food key={id} name={name} picture={picture} rating={rating} />
      ))}
    </div>
  );
}

export default App;
