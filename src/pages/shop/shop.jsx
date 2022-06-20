import {Routes, Route} from "react-router-dom";
import './shop.scss'
import CategoriesPreview from "../categories-preview/categories-preview";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
    </Routes>
  )
}

export default Shop
