import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const InputSearch = (props) => {
  const { handleSetSearch, handleSetTodo, handleShowCreateModal } = props;

  const handleSubmit = () => {
    handleShowCreateModal();
    handleSetTodo(null);
  };

  return (
    <Form className="d-flex gap-3" style={{ height: 42 }}>
      <Form.Control type="email" placeholder="Search keywords..." onChange={handleSetSearch} />
      <Button onClick={handleSubmit} style={{ width: 150 }}>
        Create
      </Button>
    </Form>
  );
};

InputSearch.propTypes = {};

export default InputSearch;
