import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const ModalWrapper = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

const ModalContent = styled.div`
  background: #f0f0f0;
  width: 300px;
  height: 80vh;
  padding: 10px 20px;
  margin: 10vh auto;
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <button onClick={onClose}>X</button>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root'),
  );
};

export default ModalPortal;
