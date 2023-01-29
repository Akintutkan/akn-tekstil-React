import React from "react"
import "./directory-item.styles.scss"
import { useNavigate } from "react-router-dom"


const DirectoryItem =({category}) => {
    const {imageUrl,title,linkUrl} = category
    const navşgate = useNavigate()
    const onNavigateHandler = ( ) => navşgate(linkUrl)
return (
<div className="directory-container" onClick={onNavigateHandler}>
<div className="background-image"style={{backgroundImage:`url(${imageUrl})`}}>
</div>
<div className="directory-item-body">
<h2>{title}</h2>
<p>Shop Now</p>
</div>
</div>
)
}
export default DirectoryItem