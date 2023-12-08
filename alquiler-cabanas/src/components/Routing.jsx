import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ItemsListContainer from "./ItemsListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

import Cart from "./Cart";
import CartProvider from "../context/CartContext";


const Routing = () => {
    return(
    <>
    <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemsListContainer/>}/>
            <Route path= '/categoria/:categoriaId' element={<ItemsListContainer/>}/> 
            <Route path='detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path="/"/>
            <Route path="*" element={<h1> 404 NOT FOUND</h1>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
    )
}

export default Routing;