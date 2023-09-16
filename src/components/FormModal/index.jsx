import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

FormModal.propTypes = {};

function FormModal(props) {
  const { children, show, handleClose } = props;

  return (
    <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Create new todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
