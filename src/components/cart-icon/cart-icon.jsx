import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = ({toggle}) => {
  const {total} = useContext(CartContext)
  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{total}</span>
    </div>
  )
}

export default CartIcon
