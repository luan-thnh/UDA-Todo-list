import React, { useState } from 'react';
import { Badge, Button, ListGroup, Stack } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';

const PizzaCheckout = (props) => {
  const { pizzas, handleOnChange, handleIncrementInput, handleDecrementInput, handleResetValue, getTotalPrice } = props;

  return (
    <Stack className="col-5">
      <Stack className="justify-content-between" direction="horizontal">
        <Stack className="gap-2" direction="horizontal">
          <h4 className="text-secondary">Your pizza</h4>
          <Badge pill bg="secondary">
            3.00$
          </Badge>
        </Stack>
        <Button variant="warning" onClick={handleResetValue}>
          Reset pizza
        </Button>
      </Stack>

      <ListGroup className="mt-3">
        {pizzas.map(({ name, price, quantity }, index) => (
          <ListGroup.Item key={index}>
            <Stack direction="horizontal">
              <Stack>
                <p style={{ fontWeight: 600 }}>{name}</p>
                <span className="text-secondary">{price}$</span>
              </Stack>
              <Stack className="gap-2" direction="horizontal">
                <Button variant="danger" onClick={() => handleDecrementInput(index)}>
                  <Dash style={{ fontSize: 22 }} />
                </Button>
                <input
                  className="form-control"
                  value={quantity}
                  onChange={(e) => handleOnChange(e, index)}
                  style={{ width: 50 }}
                />
                <Button variant="success" onClick={() => handleIncrementInput(index)}>
                  <Plus style={{ fontSize: 22 }} />
                </Button>
              </Stack>
            </Stack>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Stack className="justify-content-between" direction="horizontal">
            <span>Total</span>
            <span style={{ fontWeight: 600 }}>{getTotalPrice().toFixed(2)}$</span>
          </Stack>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>Checkout</Button>
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};

export default PizzaCheckout;
