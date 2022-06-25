import {Routes, Route} from "react-router-dom";
import './shop.scss'
import {CategoriesProvider} from "../../context/categories.context";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
      </Routes>
    </CategoriesProvider>
  )
}

export default Shop
