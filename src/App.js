import Home from "./pages/home/home";
import {Routes, Route} from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Auth from "./pages/auth/auth";
import Shop from "./pages/shop/shop";
import Checkout from "./pages/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
