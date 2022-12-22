import shop_data from "../shop-data.js";
import "./productContainer.css"
import React from "react";

const MenProduct = () => {
    return (
      <div className='product-container'>
        {shop_data[4].items.map(item => (
          <div key={item.id}   >
          <img src={item.imageUrl} className='product-item'
          alt={item.name} />
          <h2 className="product-description">{item.name} {item.price}</h2>
          </div>
        ))}
      </div>
    );
        }


export default MenProduct