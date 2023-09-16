import React from 'react';
import PropTypes from 'prop-types';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  handleSetTodo: PropTypes.func.isRequired,
  handleShowRemoveModal: PropTypes.func.isRequired,
  handleTodoStatusChange: PropTypes.func.isRequired,
};

function TodoItem(props) {
  const { todoItem, handleSetTodo, handleShowRemoveModal, handleShowCreateModal, handleTodoStatusChange } = props;
  const { id, title, status } = todoItem;

  const handleRemoveTodo = (newTodo) => {
    handleSetTodo(newTodo);
    handleShowRemoveModal();
  };

  const handleEditTodo = (newTodo) => {
    handleSetTodo(newTodo);
    handleShowCreateModal();
  };

  return (
    <div className="d-flex align-items-center justify-content-between shadow-sm rounded mt-2" style={{ height: 54 }}>
      <p
        className="ps-3 m-0 h-100 flex-grow-1 d-flex align-items-center"
        style={{
          textDecoration: status === 'done' ? 'line-through' : 'none',
          color: status === 'done' ? '#777' : '#333',
          cursor: 'default',
        }}
        onClick={() => handleTodoStatusChange(id)}
      >
        {title}
      </p>
      <div className="d-flex gap-2 pe-3">
        <Button
          variant="danger"
          style={{ padding: '10px' }}
          className="d-flex align-items-center justify-content-center"
          onClick={() => handleRemoveTodo(todoItem)}
        >
          <Trash />
        </Button>
        <Button
          variant="primary"
          style={{ padding: '10px' }}
          className="d-flex align-items-center justify-content-center"
          onClick={() => handleEditTodo(todoItem)}
        >
          <PencilSquare />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
