import React, { useState } from 'react';
import PizzaCheckout from './PizzaCheckout';
import { Stack } from 'react-bootstrap';
import PizzaListOrder from './PizzaListOrder';
import ColdCuts from '../../assets/images/cold-cuts.jpg';
import Pepperoni from '../../assets/images/pepperoni.jpg';
import Feta from '../../assets/images/feta.jpg';
import Mozzarella from '../../assets/images/mozzarella.jpg';
import SwissCheese from '../../assets/images/swiss-cheese.jpg';
import Spices from '../../assets/images/spices.jpg';
import Vegetables from '../../assets/images/vegetables.jpg';

const pizzaList = [
  {
    name: 'Cold cuts',
    imageUrl: ColdCuts,
    price: 5,
    quantity: 0,
  },
  {
    name: 'Pepperoni',
    imageUrl: Pepperoni,
    price: 3.5,
    quantity: 0,
  },
  {
    name: 'Feta',
    imageUrl: Feta,

    price: 2.5,
    quantity: 0,
  },
  {
    name: 'Mozzarella',
    imageUrl: Mozzarella,

    price: 1.5,
    quantity: 0,
  },
  {
    name: 'Swiss cheese',
    imageUrl: SwissCheese,

    price: 3,
    quantity: 0,
  },
  {
    name: 'Spices',
    imageUrl: Spices,

    price: 0.5,
    quantity: 0,
  },
  {
    name: 'Vegetables',
    imageUrl: Pepperoni,

    price: 1.25,
    quantity: 0,
  },
];

const Pizza = () => {
  const [pizzas, setPizzas] = useState(pizzaList);

  const handleOnChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]+$/.test(value) && value !== '' && value !== '-' && value !== '+') {
      e.preventDefault();
      return;
    }

    const newPizzas = [...pizzas];
    newPizzas[index].quantity = parseInt(value, 10);
    setPizzas(newPizzas);
  };

  const handleDecrementInput = (index) => {
    if (pizzas[index].quantity > 0) {
      const newPizzas = [...pizzas];
      newPizzas[index].quantity -= 1;
      setPizzas(newPizzas);
    }
  };

  const handleIncrementInput = (index) => {
    const newPizzas = [...pizzas];
    newPizzas[index].quantity += 1;
    setPizzas(newPizzas);
  };

  const handleResetValue = () => {
    const newPizzas = [...pizzas];
    const updatedPizzas = newPizzas.map((pizza) => ({ ...pizza, quantity: 0 }));
    setPizzas(updatedPizzas);
  };

  const getTotalPrice = () => {
    return pizzas.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  console.log(pizzas);

  return (
    <Stack direction="horizontal" className="align-items-start gap-5">
      <PizzaListOrder pizzas={pizzas} />
      <PizzaCheckout
        pizzas={pizzas}
        handleOnChange={handleOnChange}
        handleIncrementInput={handleIncrementInput}
        handleDecrementInput={handleDecrementInput}
        handleResetValue={handleResetValue}
        getTotalPrice={getTotalPrice}
      />
    </Stack>
  );
};

export default Pizza;
