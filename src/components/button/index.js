import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const DefaultButtonComponent = styled.input`
  background: transparent;
  border: solid 2px #043e8a;
  border-radius: 0.25rem;
  color: #076aeb;
  margin: 0 auto;
  min-width: ${(props) => props.minWidth};
  padding: 0.5rem;
  &:hover {
    background: #012452;
    color: #fff;
    cursor: pointer;
  }
`;

const TransitionButtonComponent = styled(DefaultButtonComponent)`
  transition: padding 0.3s ease-in-out;
  &:hover {
    padding: 0.5rem 1rem;
  }
`;

export const DefaultButton = ({ value, type, minWidth }) => (
  <DefaultButtonComponent value={value} type={type} minWidth={minWidth} />
);

DefaultButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  minWidth: PropTypes.string,
};

DefaultButton.defaultProps = {
  type: "submit",
  minWidth: "auto",
};

export const TransitionButton = ({ value, type, minWidth }) => (
  <TransitionButtonComponent value={value} type={type} minWidth={minWidth} />
);

TransitionButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  minWidth: PropTypes.string,
};

TransitionButton.defaultProps = {
  type: "submit",
  minWidth: "auto",
};
