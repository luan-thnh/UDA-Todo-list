import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputSearch from './InputSearch';
import SearchFilter from './SearchFilter';
import TodoItem from './TodoItem';
import CreateFormModal from './CreateFormModal';

TodoList.propTypes = {};

function TodoList(props) {
  const [todoList, setTodoList] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    setTodoList([
      {
        id: 1,
        title: 'Learn ReactJs',
        status: 'in-process',
      },
      {
        id: 2,
        title: 'Learn HTML&CSS',
        status: 'in-process',
      },
      {
        id: 3,
        title: 'Learn Flutter',
        status: 'in-process',
      },
    ]);
  }, []);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  return (
    <div className="p-4 shadow rounded" style={{ width: 550, margin: '0 auto' }}>
      <InputSearch handleShowCreateModal={handleShowCreateModal} />
      <SearchFilter />

      {todoList.map(({ id, title, status }) => (
        <TodoItem key={id} title={title} status={status} />
      ))}

      <CreateFormModal showCreateModal={showCreateModal} handleCloseCreateModal={handleCloseCreateModal} />
    </div>
  );
}

export default TodoList;
