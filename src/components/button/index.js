import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DefaultButtonComponent = styled.input`
  background: transparent;
  border: solid 2px #043e8a;
  border-radius: 0.25rem;
  color: #076aeb;
  margin: 0 auto;
  min-width: ${(props) => props.minWidth};
  padding: 0.5rem;
  &:hover {
    background: ${(props) => props.hoverColor};
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

export const DefaultButton = ({
  value,
  type,
  minWidth,
  hoverColor = '#012452',
}) => (
  <DefaultButtonComponent
    value={value}
    type={type}
    minWidth={minWidth}
    hoverColor={hoverColor}
  />
);

DefaultButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  minWidth: PropTypes.string,
  hoverColor: PropTypes.string,
};

DefaultButton.defaultProps = {
  type: 'submit',
  minWidth: 'auto',
};

export const TransitionButton = ({
  value,
  type,
  minWidth,
  onClick,
  hoverColor = '#012452',
}) => (
  <TransitionButtonComponent
    value={value}
    type={type}
    minWidth={minWidth}
    onClick={onClick}
    hoverColor={hoverColor}
  />
);

TransitionButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
};

TransitionButton.defaultProps = {
  type: 'submit',
  minWidth: 'auto',
};
