import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

FormModal.propTypes = {};

function FormModal(props) {
  const { title = true, isForm, children, show, handleClose, handleSubmit } = props;

  return (
    <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      {title && (
        <Modal.Header className="border-0">
          <Modal.Title>{isForm === 'create' ? 'Create new' : 'Edit'} todo</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant={isForm === 'create' || isForm === 'edit' ? 'primary' : 'danger'} onClick={handleSubmit}>
          {isForm === 'create' ? 'Create' : isForm === 'edit' ? 'Edit' : 'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
