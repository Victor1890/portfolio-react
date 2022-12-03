import React from "react";
import PropTypes from "prop-types";
import { GoTools } from "react-icons/go";
import Image from "../../components/image";
import Link from "../../components/link";
import { Typography } from "../../components/typography";
import { CardContent, CardWrapper, ImageWrapper } from "./style";

const Card = ({ image, descriptions, link, id }) => (
  <CardWrapper key={id}>
    <ImageWrapper>
      <Image
        alt={image.alt}
        src={image.src}
        maxHeight="6rem"
        maxWidth="10rem"
        height="100%"
        width="100%"
      />
    </ImageWrapper>
    <CardContent>
      {descriptions.map((description) => (
        <Typography textAlign="center" fontSize="0.85rem" key={description}>
          {description}
        </Typography>
      ))}
    </CardContent>
    {link.isDisabled ? (
      <Link rel="noopener noreferrer" disabled={link.isDisabled}>
        <Typography fontSize="0.8rem" color="#076aeb">
          In development <GoTools />
        </Typography>
      </Link>
    ) : (
      <Link href={link.href} rel="noopener noreferrer" target="_blank">
        <Typography fontSize="0.8rem" fontWeight={600} color="#076aeb">
          {link.textLink}
        </Typography>
      </Link>
    )}
    {/* <Link
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
      disabled={link.isDisabled}
    >
      {link.isDisabled ? (
        <Typography fontSize="0.8rem" color="#076aeb">
          In development <GoTools />
        </Typography>
      ) : (
        <Typography fontSize="0.8rem" fontWeight={600} color="#076aeb">
          {link.textLink}
        </Typography>
      )}
    </Link> */}
  </CardWrapper>
);

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    textLink: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
