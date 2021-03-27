import React from 'react';
import Spinner from './SpinnerComponent.style.js';

const SpinnerComponent = ({ show }) => {
  return <Spinner show={show}>Loading...</Spinner>;
};

export default SpinnerComponent;
