import React from 'react'
import cart from './assets/cart.svg'
const CartWidget = () => {
    return (
        <div style={{width:70,height:70}}>
            <img src={cart} alt="cartWidget"/>
        </div>
    )
}
export default CartWidget