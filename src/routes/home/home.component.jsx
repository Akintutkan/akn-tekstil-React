import {Outlet} from "react-router-dom"
import Directory from "../../components/directory/directory.component";

const Home = () =>{
  const kategoriler = [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        "linkUrl" : "hat"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        "linkUrl" : "jacket"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        "linkUrl" : "sneaker"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
        "linkUrl" : "women"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
        "linkUrl" : "men"
      }
    ]
  
  return (
    <div>
        <Directory kategoriler={kategoriler}/>
         <Outlet/> {/*aşağı alırsam aşağıda render olur */}
         
    </div>
  )
}

export default Home;