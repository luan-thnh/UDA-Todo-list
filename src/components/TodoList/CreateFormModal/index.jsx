import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';
import FormModal from '../../FormModal';

CreateFormModal.propTypes = {};

function CreateFormModal(props) {
  const { todo, showCreateModal, handleCloseCreateModal, handleCreateTodo } = props;
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (todo) {
      inputRef.current.value = todo.title;
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = inputRef.current;

    if (input.value.trim()) {
      const todo = {
        id: Date.now(),
        title: input.value,
        status: 'in-process',
      };

      handleCreateTodo(todo);
      handleCloseCreateModal();
      input.value = '';
    } else {
      setError(true);
      input.focus();
    }
  };

  return (
    <FormModal
      show={showCreateModal}
      isForm={todo ? 'edit' : 'create'}
      handleClose={handleCloseCreateModal}
      handleSubmit={handleSubmit}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder={`Enter ${todo ? 'edit' : 'create'} todo...`}
          ref={inputRef}
          isInvalid={error}
          autoFocus
        />
        {error && (
          <Form.Control.Feedback type="invalid">You haven't entered any todo yet, please enter!</Form.Control.Feedback>
        )}
      </Form>
    </FormModal>
  );
}

export default CreateFormModal;
