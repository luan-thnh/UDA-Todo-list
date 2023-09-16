import React from 'react';
import PropTypes from 'prop-types';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

TodoItem.propTypes = {};

function TodoItem(props) {
  // const { name } = props;
  return (
    <div className="d-flex align-items-center justify-content-between shadow-sm rounded mt-2 py-2 px-4">
      <p className="p-0 m-0">jaja</p>
      <div className="d-flex gap-2 ">
        <Button
          variant="danger"
          className="d-flex align-items-center justify-content-center"
          style={{ padding: '10px' }}
        >
          <TrashFill />
        </Button>
        <Button
          variant="primary"
          className="d-flex align-items-center justify-content-center"
          style={{ padding: '10px' }}
        >
          <PencilSquare />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
