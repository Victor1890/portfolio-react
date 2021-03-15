import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TransitionButton } from '../button/index';
import { Title, Typography } from '../typography/index';
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
  justify-content: center;
  align-items: center;
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Modal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalUp>
          <TransitionButton value="X" onClick={onClose} hoverColor="#df4230" />
        </ModalUp>
        <ModalContent>
          <Title fontSize="2rem" fontWeight={700}>
            Victor
          </Title>
          <Image
            height="22rem"
            width="40rem"
            src="https://w.wallhaven.cc/full/pk/wallhaven-pkkm6p.png"
            alt="tesr"
          />
          <br />
          <Typography textAlign="center">
            I started my journey as a developer in 2018. I have a special
            interest in frontend and backend development, where it has worked
            most of my projects and increases my skills. A fan of learning and
            interacting with new technologies, these are the skills that I have
            learned and improved during this fantastic journey.
          </Typography>

          <ModalFooter>
            <TransitionButton />
            <TransitionButton />
          </ModalFooter>
        </ModalContent>
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
