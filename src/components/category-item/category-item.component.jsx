import "./category-item.styles.scss"
import { withRouter } from 'react-router-dom';



const CategoryItem =({category}) => {
    const {imageUrl,title} = category
return (
<div className="kategori-konteynırı" 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
<div className="background-image"
style={{backgroundImage:`url(${imageUrl})`}}>
</div>
<div className="kategori-gövde-konteynırı">
<h2>{title}</h2>
<p>Shop Now</p>
</div>
</div>)
}
export default CategoryItem