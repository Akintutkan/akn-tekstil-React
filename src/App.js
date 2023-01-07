import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Cart from "./routes/cart/Cart";
import HatProduct from "./products/HatProduct";
import MenProduct from "./products/MenProduct";
import JacketProduct from "./products/JacketProduct";
import WomenProduct from "./products/WomenProduct";
import SneakerProduct from "./products/SneakerProduct";





const Shop = () => {
  return (
  <>
  <h1> Ben Mağaza Sayfasıyım</h1>
  
<HatProduct/>
<JacketProduct/>
<MenProduct/>
<WomenProduct/>
<SneakerProduct/>
</>
  
  )
}


const App = () =>{
  return (
    
  <Routes>
    <Route path="/" element={<Navigation/>}> 
    <Route index element={<Home/>} />
    <Route path="shop" element ={<Shop/>} />
    <Route path="cart" element ={<Cart/>} />
    <Route path="sign-in" element={<SignIn />}/>
    <Route path="hat" element={<HatProduct />}/>
    <Route path="men" element={<MenProduct />}/>
    <Route path="women" element={<WomenProduct />}/>
    <Route path="jacket" element={<JacketProduct />}/>
    <Route path="sneaker" element={<SneakerProduct />}/>
    </Route>
    </Routes>
      )
}

export default App;
