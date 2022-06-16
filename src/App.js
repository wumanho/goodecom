import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Auth from "./routes/auth/auth";
import {Fragment} from "react";

const Shop = () => {
  return (
    <Fragment>
      <h1>I am the SHOP</h1>
    </Fragment>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
      </Route>
    </Routes>
  )
}

export default App;
