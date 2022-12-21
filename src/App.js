import {Routes,Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Hats from "./products/hats/hats";
import Mens from "./products/mens/mens";




const Shop = () => {
  return <h1> Ben Mağaza Sayfasıyım</h1>
}


const App = () =>{
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}> 
    <Route index element={<Home/>} />
    <Route path="shop" element ={<Shop/>} />
    <Route path="sign-in" element={<SignIn />}/>
    <Route path="hats" element={<Hats />}/>
    <Route path="mens" element={<Mens />}/>


    </Route>
    </Routes>
      )
}

export default App;
