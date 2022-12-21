import SHOP_DATA from "./shop-data.js";
import "./mens.css"
import React from "react";

const Mens = () => {
    return (
      <div className='hats-container'>
        {SHOP_DATA[4].map(item => (
          <div key={item.id}>
          <img className='hats' src={item.imageUrl} 
          alt={item.name} />
          <h2>{item.name} {item.price}</h2>
          </div>
        ))}
      </div>
    );
        }


export default Mens