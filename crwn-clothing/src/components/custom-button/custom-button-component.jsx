import React from 'react';

import './custom-button-styles.scss';

const CustomButton = ({children, isGooggleSignIn, ...otherProps}) => (
  <button className={`${isGooggleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;