import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SearchFilter = (props) => {
  const { handleFilterAllTodo, handleFilterDoneTodo, handleFilterInProcessTodo } = props;
  const [tab, setTab] = useState(1);

  const handleClickBtnAll = () => {
    handleFilterAllTodo();
    setTab(1);
  };

  const handleClickBtnDone = () => {
    handleFilterDoneTodo();
    setTab(2);
  };

  const handleClickBtnInProcess = () => {
    handleFilterInProcessTodo();
    setTab(3);
  };

  return (
    <div className="d-flex gap-3 my-3">
      <Button style={{ width: '100%' }} variant={tab === 1 ? 'primary' : 'outline-primary'} onClick={handleClickBtnAll}>
        All
      </Button>
      <Button
        style={{ width: '100%' }}
        variant={tab === 2 ? 'primary' : 'outline-primary'}
        onClick={handleClickBtnDone}
      >
        Done
      </Button>
      <Button
        style={{ width: '100%' }}
        variant={tab === 3 ? 'primary' : 'outline-primary'}
        onClick={handleClickBtnInProcess}
      >
        In-process
      </Button>
    </div>
  );
};

export default SearchFilter;
