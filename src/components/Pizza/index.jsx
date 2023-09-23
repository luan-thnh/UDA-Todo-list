import React from 'react';
import PizzaCheckout from './PizzaCheckout';
import { Stack } from 'react-bootstrap';
import PizzaListOrder from './PizzaListOrder';

const Pizza = () => {
  return (
    <Stack direction="horizontal" style={{ width: '70%', margin: '0 auto' }}>
      <PizzaListOrder />
      <PizzaCheckout />
    </Stack>
  );
};

export default Pizza;
