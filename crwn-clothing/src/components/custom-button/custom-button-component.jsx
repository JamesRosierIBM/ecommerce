import React from 'react';

import './custom-button-styles.scss';

const CustomButton = ({children, isGooggleSignIn, inverted, ...otherProps}) => (
  <button className={`{${inverted ? 'inverted' : ''}
  ${isGooggleSignIn ? 
  'google-sign-in' : ''} custom-button`} 
  {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton;