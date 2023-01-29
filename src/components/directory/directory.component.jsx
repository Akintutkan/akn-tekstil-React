import DirectoryItem from "../directory-item/directory-item.component"
import "./directory.styles.scss"

const Directory = ({kategoriler}) =>{ 
     return (
     <div className="dizin-konteynırı">
{kategoriler.map((category)=>(
  <DirectoryItem key={category.id} category={category} />
))}
</div>
)
}

export default Directory