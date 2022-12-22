import shop_data from "../shop-data.js";
import "./productContainer.css"
import React from "react";

const SneakerProduct = () => {
    return (
      <div className='product-container'>
        {shop_data[1].items.map(item => (
          <div key={item.id}>
          <img className='product-item' src={item.imageUrl} 
          alt={item.name} />
          <h2>{item.name} {item.price}</h2>
          </div>
        ))}
      </div>
    );
        }


export default SneakerProduct