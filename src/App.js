 import React from 'react';
 import PropTypes from 'prop-types'

 const foodLike = [
   {
     id: 1,
     name: "Kimchi",
     image: "blablabla",
     rating: "string"
   },
   {
     id: 2,
     name: "Pizza",
     image: "blablabla2",
     rating: 5.0
   }
 ];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}></img>
      <h4>{rating}/5.0</h4>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {     // 이게 App Component
  return ( 
    <div>
      <h1>Hello React!</h1>
      {foodLike.map(food => (
        <Food key={food.id} name={food.name} picture={food.image} rating={food.rating} />
      ))}
    </div>
  )
}
export default App;
