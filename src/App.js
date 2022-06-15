import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in";
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
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
