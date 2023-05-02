import React from 'react';
import { BtnStyled } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({ type = 'button', children, onClick }) => {
  return (
    <BtnStyled type={type} onClick={onClick}>
      {children}
    </BtnStyled>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
