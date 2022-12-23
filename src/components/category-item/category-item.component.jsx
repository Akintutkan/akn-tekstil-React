
import "./category-item.styles.scss"




const CategoryItem =({category}) => {
    const {imageUrl,title,linkUrl} = category
return (
<div className="kategori-konteynırı" 
onClick={() => (`${linkUrl}`)}    
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