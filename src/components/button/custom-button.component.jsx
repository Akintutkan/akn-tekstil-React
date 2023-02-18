import React from 'react';
import './custom-button.styles.js';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
} from './ButttonStyles';

 export const BUTTON_TYPE_CLASSES = {
  google:"google-sign-in",
  inverted:"inverted",
  base:"base"}

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>({
[BUTTON_TYPE_CLASSES.base]: BaseButton,
[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export default function Button({
  children,
  buttonType,
  isLoading= false,
  ...otherProps
}){
 const CustomButton = getButton(buttonType);
  return(
  <CustomButton disabled={isLoading} {...otherProps}>
  {isLoading ? <LoadingSpinner /> : children}
  </CustomButton>
);
}