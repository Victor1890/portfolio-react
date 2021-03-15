import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TransitionButton } from '../button/index';
import Image from '../image/index';

const ModalWrapper = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

const ModalCard = styled.div`
  background: #f0f0f0;
  width: calc(100% - 10%);
  height: 80vh;
  padding: 10px 20px;
  margin: 10vh auto;
`;

const ModalUp = styled.div`
  float: right;
`;

const ModalContent = styled.article`
  display: flex;
  flex-direction: column;
`;

const Modal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalUp>
          <TransitionButton value="X" onClick={onClose} hoverColor="#df4230" />
          <ModalContent>
            <Image
              maxWidth={10}
              minHeight={10}
              src="https://w.wallhaven.cc/full/pk/wallhaven-pkkm6p.png"
              alt="tesr"
            />
          </ModalContent>
        </ModalUp>
      </ModalCard>
    </ModalWrapper>
  );
};

const ModalPortal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <Modal onClose={onClose} />,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalPortal;
