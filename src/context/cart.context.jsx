import {createContext, useState, useEffect} from "react";

export const CartContext = createContext({
  cartItems: [],
  total: 0,
  addItemToCart: () => {
  }
})

/**
 * 辅助函数，实现加入购物车逻辑
 * @param cartItems 当前的购物车列表
 * @param productToAdd 需要被添加到购物车的 product 对象
 */
const addCartItem = (cartItems, productToAdd) => {
  if (cartItems.length === 0) {
    return [{...productToAdd, quantity: 1}]
  }
  const existingItem = cartItems.find(item => item.id === productToAdd.id)
  if (existingItem) {
    return cartItems.map(item => {
      return item.id === existingItem.id
        ? {...item, quantity: item.quantity + 1} : item
    })
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
}

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cartItems.reduce((total, cur) => total + cur.quantity, 0))
  }, [cartItems])

  /**
   * 用于构建购物车列表
   * @param productToAdd 用户点击事件中的 product 对象
   */
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {cartItems, addItemToCart, total}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}

export default CartProvider
