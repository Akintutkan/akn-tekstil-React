import "./CategoryPreviewStyles.js"
import ProductCard from "../ProductCard/product-card.component"
import React from 'react'
import { Link } from "react-router-dom"

const CategoryPreview = ({title,products}) => {
  return (
    <div className="category-preview">
        <h2>
            <Link className="title">{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {products.filter((_,idx)=> idx <4)
            .map((product) =>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
  )
}

export default CategoryPreview