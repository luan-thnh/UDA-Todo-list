import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Image, Stack } from 'react-bootstrap';
import { Translate } from 'react-bootstrap-icons';

const PizzaListOrder = (props) => {
  const { pizzas } = props;

  return (
    <div className="col-7">
      <h4 className="text-secondary mb-4">Your pizza</h4>
      <Stack
        direction="horizontal"
        className="row justify-content-start align-items-start gap-3"
        style={{
          alignSelf: 'start',
        }}
      >
        {pizzas.map(({ imageUrl, quantity }, index) =>
          quantity > 0 ? (
            <div
              key={index}
              className="position-relative"
              style={{
                width: 180,
                height: 110,
                padding: 0,
              }}
            >
              <Image
                thumbnail
                src={imageUrl}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Badge
                pill
                bg="danger"
                className="position-absolute"
                style={{
                  top: 0,
                  right: 0,
                  transform: 'translate(50%, -50%)',
                }}
              >
                {quantity}
              </Badge>
            </div>
          ) : null
        )}
      </Stack>
    </div>
  );
};

export default PizzaListOrder;
