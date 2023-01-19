import React from 'react';
import './custom-button.styles.scss';
const buttonTypes = {google:"google-sign-in",inverted:"inverted"}
const CustomButton = ({children,inverted,isGoogleSignIn,...otherProps}) => {
  return(
  <button
  className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} button-container`}
  {...otherProps}
>
  {children}
  </button>
);
}
export default CustomButton;