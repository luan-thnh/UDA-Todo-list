import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';
import FormModal from '../../FormModal';

CreateFormModal.propTypes = {};

function CreateFormModal(props) {
  const { showCreateModal, handleCloseCreateModal } = props;

  return (
    <FormModal show={showCreateModal} handleClose={handleCloseCreateModal}>
      <Form>
        <Form.Control />
      </Form>
    </FormModal>
  );
}

export default CreateFormModal;
