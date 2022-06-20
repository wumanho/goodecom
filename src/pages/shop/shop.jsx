import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card";
import './shop.scss'

const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => {
          return (<Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
              {
                categoriesMap[title].map(p => {
                  return <ProductCard key={p.id} product={p}/>
                })
              }
            </div>
          </Fragment>)
        })
      }
    </Fragment>
  )
}

export default Shop
