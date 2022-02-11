import React, { useEffect, useState } from 'react';
import './App.css';
import { getFood, chooseRandomFood } from './model/food';
import Header from './components/Header'
import FoodCard from './components/FoodCard';
import Button from './components/Button'


// App class
const App = () => {

  // Set state
  const [food, setFood] = useState({
    name: 'Name',
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3',],
    image: ''
  });
  const [isLoading, setLoading] = useState(true);

  // init food state
  useEffect(async () => {
    const result = await chooseRandomFood();
    if (result) {
      setFood(result)
      setLoading(false);
    }
  }, []);


  // Button click handler
  async function buttonClicked() {
    const result = await chooseRandomFood();
    if (result) {
      setFood(result);
      setLoading(false);
    }
  }


  // Return app jsx
  return (

    <main className='container' >

      <Header />

      <FoodCard food={food} isLoading={isLoading} />

      <Button onClick={buttonClicked} />

    </main>

  )

};

export default App;
