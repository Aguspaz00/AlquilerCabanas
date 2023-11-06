import React from "react"
import { useState,useEffect } from "react"
import { getProducts } from "./async"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'



const ItemsListContainer = ({saludo}) => {
    const [products, setProducts] = useState ([])

    const { categoriaId } = useParams()

    useEffect(()=> {
        const asyncFunc = categoriaId ? getProductsCategoria : getProducts

        asyncFunc(categoriaId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoriaId])

    return (
        <div className="background">
            {saludo}
            <ItemList products={products}/>
        </div>
    )
}
export default ItemsListContainer