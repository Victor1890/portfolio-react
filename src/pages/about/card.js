import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { GoTools } from 'react-icons/go';

import Image from '../../components/image';
import Link from '../../components/link';
import { Typography } from '../../components/typography';
import ModalPortal from '../../components/modal/index';

const CardWrapper = styled.article`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 25.5rem;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;
const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 6rem;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
`;

const GlobalCard = styled.div`
  cursor: pointer;
`;

const Card = ({
  image,
  descriptions,
  linkCode,
  textLink,
  isDisabled,
  isActive,
  onActive,
}) => {
  return (
    <Fragment>
      <GlobalCard onClick={onActive}>
        <CardWrapper>
          <ImageWrapper>
            <Image
              alt={image.alt}
              src={image.src}
              maxHeight="6rem"
              maxWidth="10rem"
            />
          </ImageWrapper>
          <CardContent>
            {descriptions.map((description) => (
              <Typography
                textAlign="center"
                fontSize="0.85rem"
                key={description}
              >
                {description}
              </Typography>
            ))}
          </CardContent>
          <Link
            href={linkCode}
            rel="noopener noreferrer"
            target="_blank"
            disabled={isDisabled}
          >
            {isDisabled ? (
              <Typography fontSize="0.8rem" color="#076aeb">
                In development <GoTools />
              </Typography>
            ) : (
              <Typography fontSize="0.8rem" fontWeight={600} color="#076aeb">
                {textLink}
              </Typography>
            )}
          </Link>
        </CardWrapper>
      </GlobalCard>
      {isActive && <ModalPortal />}
    </Fragment>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkCode: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  textLink: PropTypes.string.isRequired,
  onActive: PropTypes.func,
};

export default Card;
