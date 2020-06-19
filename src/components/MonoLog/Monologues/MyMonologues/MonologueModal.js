import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import styled from 'styled-components'


const MonologueModal = (props) => {
    const {
        buttonLabel,
        className
      } = props;

const Button = styled.button`
    margin-top: 1em;
    border: 2px solid black;
    border-radius: 2px;
    height: 50px;
    width: 100px;
    background-color: rgb(255, 255, 0);
    cursor: pointer;
    font-size: 17px;
    font-family: MOMCAKE-BOLD;
`;      

// const Modal = styled.form`
//     font-family: Colombia-Regular;
// `;

  return (
    <div>
      {/* <Button onClick={props.toggle}>{buttonLabel}</Button> */}
      <Button onClick={props.toggle}>View Monologue</Button>
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