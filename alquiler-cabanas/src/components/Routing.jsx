import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ItemsListContainer from "./ItemsListContainer";
import ItemDetailContainer from "./itemDetailContainer";
import CartWidget from "./CartWidget";

const Routing = () => {
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemsListContainer/>}/>
            <Route path= '/categoria/:categoriaId' element={<ItemsListContainer/>}/> 
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1> 404 NOT FOUND</h1>}/>
            <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;