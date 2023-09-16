import React from 'react';
import PropTypes from 'prop-types';
import FormModal from '../../FormModal';
import { ExclamationCircle } from 'react-bootstrap-icons';

RemoveTodoModal.propTypes = {
  handleRemoveTodo: PropTypes.func.isRequired,
};

function RemoveTodoModal(props) {
  const { showRemoveModal, handleRemoveTodo, handleCloseRemoveModal } = props;

  const handleSubmit = () => {
    handleRemoveTodo();
    handleCloseRemoveModal();
  };

  return (
    <FormModal show={showRemoveModal} title={false} handleClose={handleCloseRemoveModal} handleSubmit={handleSubmit}>
      <div className="d-flex flex-column align-items-center justify-content-center gap-3 mt-3">
        <ExclamationCircle size={100} color="#ffea28" />
        <h3>Are you sure?</h3>
      </div>
    </FormModal>
  );
}

export default RemoveTodoModal;
