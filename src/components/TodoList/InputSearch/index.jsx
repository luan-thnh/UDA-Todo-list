import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const InputSearch = (props) => {
  const { handleShowCreateModal } = props;
  return (
    <Form className="d-flex gap-3" style={{ height: 42 }}>
      <Form.Control type="email" placeholder="Search keywords..." />
      <Button onClick={handleShowCreateModal}>Create</Button>
    </Form>
  );
};

InputSearch.propTypes = {};

export default InputSearch;
