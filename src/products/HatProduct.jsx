import React from 'react'
import hatdata from "./shop-data.json"
import "./productContainer.css"


fetch("./shop-data.json")
.then(resp => resp.json())

const HatProduct = () => {
    return (
      <div className='product-container'>
        {hatdata.map(item => (
          <div key={item.id}>
          <img className='product-item' src={item.imageUrl} 
          alt={item.name} />
          <h2>{item.name} {item.price}</h2>
          </div>
        ))}
      </div>
    );
        }


export default HatProduct

