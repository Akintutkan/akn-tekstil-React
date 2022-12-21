import React from 'react'
import hatdata from "./shop-data.json"
import "./hats.css"


fetch("./shop-data.json")
.then(resp => resp.json())

const Hats = () => {
    return (
      <div className='hats-container'>
        {hatdata.map(item => (
          <div key={item.id}>
          <img className='hats' src={item.imageUrl} 
          alt={item.name} />
          <h2>{item.name} {item.price}</h2>
          </div>
        ))}
      </div>
    );
        }


export default Hats

