import './category.scss'
import {useParams} from "react-router-dom";
import {useContext, useState, useEffect, Fragment} from "react";
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card";

const Category = () => {
  const {categoriesMap} = useContext(CategoriesContext)
  const {category} = useParams()
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {
          products && products.map(p => {
            return <ProductCard key={p.id} product={p}/>
          })
        }
      </div>
    </Fragment>
  )
}

export default Category
