import {createContext, useState, useEffect} from "react";

export const CartContext = createContext({
  cartItems: [],
  total: 0,
  totalPrice: 0,
  addItemToCart: () => {
  },
  removeItemToCart: () => {
  },
  clearItemFromCart: () => {
  }
})

/**
 * 辅助函数，实现加入购物车逻辑，如果不存在就创建，已存在就 +1
 * @param cartItems 当前的购物车列表
 * @param productToAdd 需要被添加到购物车的 product 对象
 */
const addCartItem = (cartItems, productToAdd) => {
  if (cartItems.length === 0) {
    return [{...productToAdd, quantity: 1}]
  }
  const existingItem = findItemFromCart(cartItems, productToAdd)
  // 已有
  if (existingItem) {
    return cartItems.map(item => {
      return item.id === existingItem.id
        ? {...item, quantity: item.quantity + 1} : item
    })
  } else {
    // 初始化
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
}

/**
 * 辅助函数，减少购物车中已有商品，判断如果减少后数量为零，移除商品
 * @param cartItems 当前的购物车列表
 * @param cartItemToRemove 需要减少数量的对象
 */
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = findItemFromCart(cartItems, cartItemToRemove)
  // 移除
  if (existingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
  }
  // 减一
  return cartItems.map(item => {
    return item.id === existingItem.id
      ? {...item, quantity: item.quantity - 1} : item
  })
}

/**
 * 辅助函数，直接移除购物车中某个商品
 * @param cartItems 当前的购物车列表
 * @param cartItemToClear 需要从购物车移除的对象
 */
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id)
}

const findItemFromCart = (cartItems, matchData) => {
  return cartItems.find(item => item.id === matchData.id)
}

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // 商品总数计算
  useEffect(() => {
    setTotal(cartItems.reduce((total, cur) => total + cur.quantity, 0))
    setTotalPrice(cartItems.reduce((total, cur) => total + (cur.quantity * cur.price), 0))
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = {cartItems, addItemToCart, total, removeItemToCart, clearItemFromCart, totalPrice}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}

export default CartProvider
