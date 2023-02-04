import React from 'react';
import './custom-button.styles.scss';

 export const buttonTypes = {
  google:"google-sign-in",
  inverted:"inverted",
  base:"base"}

//   const getButton = (buttonType = buttonTypes.base) =>({
// [buttonTypes.base]: BaseButton,
// [buttonTypes.google]: GoogleSignInButton,
// [buttonTypes.inverted]: InvertedButton,
//   }[buttonType])

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