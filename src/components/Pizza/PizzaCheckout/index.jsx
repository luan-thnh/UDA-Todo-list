import React from 'react';
import { Badge, Stack } from 'react-bootstrap';

const PizzaCheckout = () => {
  return (
    <Stack>
      <Stack direction="horizontal">
        <h3>Your pizza</h3>
        <Badge bg="secondary">3.00$</Badge>
      </Stack>
    </Stack>
  );
};

export default PizzaCheckout;
