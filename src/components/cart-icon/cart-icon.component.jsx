import "./cart-icon.styles.scss"
import { useDispatch,useSelector } from "react-redux"

import { selectCartCount,selectIsCartOpen } from "../../store/cart/cart.selector"

import {setIsCartOpen } from "../../store/cart/cart.action"

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import React from 'react'


const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
<ShoppingIcon className="shopping-icon" />
<span className="item-count">0</span>
    </div>
  )
}

export default CartIcon