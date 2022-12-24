import React from "react"
import "./category-item.styles.scss"
import { useNavigate } from "react-router-dom";



const CategoryItem =({category}) => {
    const {imageUrl,title,linkUrl} = category
    let navigate = useNavigate();
return (
    
<div className="kategori-konteynırı"  onClick={() => {navigate(`/${linkUrl}`);
      }}>
<div className="background-image"style={{backgroundImage:`url(${imageUrl})`}}>
</div>
<div className="kategori-gövde-konteynırı">
<h2>{title}</h2>
<p>Shop Now</p>
</div>
</div>
)
}
export default CategoryItem