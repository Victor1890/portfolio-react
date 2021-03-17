import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TransitionButton, DefaultButton } from '../button/index';
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
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Link = styled.a`
  color: #141c3a;
  text-decoration: none;
`;

const Modal = ({
  onClose,
  imgPoster,
  title,
  descriptions,
  linkCode,
  linkWeb,
  alt,
}) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalUp>
          <TransitionButton
            isHover={false}
            value="X"
            onClick={onClose}
            hoverColor="#df4230"
          />
        </ModalUp>
        <ModalContent>
          <Title fontSize="2rem" fontWeight={700}>
            {'Victor' || title}
          </Title>
          <Image
            height="22rem"
            width="40rem"
            src={
              'https://w.wallhaven.cc/full/pk/wallhaven-pkkm6p.png' || imgPoster
            }
            alt={alt}
          />
          <br />
          <Typography textAlign="center">{descriptions}</Typography>

          <ModalFooter>
            <Link href={linkCode} target="_blank" rel="noopener noreferrer">
              <DefaultButton value="✌ Link to Code" />
            </Link>
            <Link href={linkWeb} target="_blank" rel="noopener noreferrer">
              <DefaultButton value="🌟 Website" />
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalCard>
    </ModalWrapper>
  );
};

const ModalPortal = ({
  onClose,
  imgPoster,
  title,
  descriptions,
  linkCode,
  linkWeb,
  alt,
}) => {
  return ReactDOM.createPortal(
    <Modal
      onClose={onClose}
      title={title}
      description={descriptions}
      linkCode={linkCode}
      linkWeb={linkWeb}
      imgPoster={imgPoster}
      alt={alt}
    />,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkWeb: PropTypes.string.isRequired,
  imgPoster: PropTypes.string.isRequired,
};

export default ModalPortal;
