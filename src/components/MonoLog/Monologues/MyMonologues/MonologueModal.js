import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MonologueModal = (props) => {
    const {
        buttonLabel,
        className
      } = props;

  return (
    <div>
      <Button color="danger" onClick={props.toggle}>{buttonLabel}</Button>
      <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>Monologue</ModalHeader>
        <ModalBody>
          {props.monologue}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default MonologueModal;