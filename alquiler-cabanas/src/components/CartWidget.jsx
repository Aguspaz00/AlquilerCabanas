import React from 'react'
import cart from './assets/cart2.svg'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
 
export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return (
        <>
            <img src={cart} alt="cartWidget" width={"50"} height={"50"} style={{marginLeft:"10px"}}/>
            <Link to= '/cart '> <span> {totalProducts() || ""}</span> </Link>
            
        </>
    );
};
export default CartWidget