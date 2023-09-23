import React, { useEffect, useState } from 'react';
import InputSearch from './InputSearch';
import SearchFilter from './SearchFilter';
import TodoItem from './TodoItem';
import CreateFormModal from './CreateFormModal';
import RemoveTodoModal from './RemoveTodoModal';

function TodoList(props) {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState(null);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  useEffect(() => {
    const storageTodoList = JSON.parse(localStorage.getItem('todoList'));
    setTodoList(storageTodoList || []);
  }, []);

  const handleSetTodo = (newTodo) => setTodo(newTodo);
  const handleSetSearch = (e) => setSearch(e.target.value);

  const handleCreateTodo = (newTodo) => {
    let newTodoList = [...todoList];

    if (todo) {
      const index = newTodoList?.findIndex((item) => item.id === todo.id);
      newTodoList[index].title = newTodo.title;
    } else {
      newTodoList = [...newTodoList, newTodo];
    }

    setTodoList(newTodoList);

    const jsonTodoList = JSON.stringify(newTodoList);
    localStorage.setItem('todoList', jsonTodoList);
  };

  const handleRemoveTodo = () => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((newTodo) => newTodo.id === todo.id);

    if (index >= 0) {
      newTodoList.splice(index, 1);

      setTodoList(newTodoList);

      const jsonTodoList = JSON.stringify(newTodoList);
      localStorage.setItem('todoList', jsonTodoList);
    } else {
      alert('Not found todo!');
    }
  };

  const handleTodoStatusChange = (id) => {
    const newTodoList = [...todoList];
    const index = todoList.findIndex((todoItem) => todoItem.id === id);

    if (index >= 0) {
      newTodoList[index].status = newTodoList[index].status === 'in-process' ? 'done' : 'in-process';
      setTodoList(newTodoList);

      const jsonTodoList = JSON.stringify(newTodoList);
      localStorage.setItem('todoList', jsonTodoList);
    } else {
      alert('Not found todo!');
    }
  };

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseRemoveModal = () => setShowRemoveModal(false);
  const handleShowRemoveModal = () => setShowRemoveModal(true);

  const handleFilterAllTodo = () => setFilter('');
  const handleFilterDoneTodo = () => setFilter('done');
  const handleFilterInProcessTodo = () => setFilter('in-process');

  const filterTodoList = todoList
    .filter((todo) => filter === '' || todo.status === filter)
    .filter((todo) => search === '' || todo.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 shadow rounded" style={{ width: 550, margin: '0 auto' }}>
      <h2 className="text-center text-danger mt-3">TODO</h2>
      <InputSearch
        handleSetTodo={handleSetTodo}
        handleSetSearch={handleSetSearch}
        handleShowCreateModal={handleShowCreateModal}
      />
      <SearchFilter
        handleFilterAllTodo={handleFilterAllTodo}
        handleFilterDoneTodo={handleFilterDoneTodo}
        handleFilterInProcessTodo={handleFilterInProcessTodo}
      />

      {filterTodoList?.map((todoItem) => (
        <TodoItem
          key={todoItem?.id}
          todoItem={todoItem}
          handleSetTodo={handleSetTodo}
          handleShowRemoveModal={handleShowRemoveModal}
          handleShowCreateModal={handleShowCreateModal}
          handleTodoStatusChange={handleTodoStatusChange}
        />
      ))}

      {showCreateModal && (
        <CreateFormModal
          todo={todo}
          todoList={filterTodoList}
          showCreateModal={showCreateModal}
          handleSetTodo={handleSetTodo}
          handleCreateTodo={handleCreateTodo}
          handleCloseCreateModal={handleCloseCreateModal}
        />
      )}

      {showRemoveModal && (
        <RemoveTodoModal
          showRemoveModal={showRemoveModal}
          handleRemoveTodo={handleRemoveTodo}
          handleCloseRemoveModal={handleCloseRemoveModal}
        />
      )}
    </div>
  );
}

export default TodoList;
