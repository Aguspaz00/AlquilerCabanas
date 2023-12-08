import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, totalPrice} = useCartContext();

    if ( cart.length === 0 ){
        return (
            <>
            <div>No se agrego ningun producto al carrito</div>
            <Link to='/'> Agregar productos</Link>
            </>
        )
    }
    return ( 
        <>
        {cart.map((product) => (
        <ItemCart key={product.id} product={product}/> 
        ))}
        <div>
            total: {totalPrice()}
        </div>
        </>
    );
};

export default Cart