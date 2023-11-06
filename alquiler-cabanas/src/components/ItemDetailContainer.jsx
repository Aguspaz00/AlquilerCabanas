import React, { useEffect, useState } from "react"; 
import ItemDetail from "./ItemDetail";
import { getProductsId } from "./async";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId} = useParams()

    useEffect(() => {
        getProductsId(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error);
        })
    }, [itemId])

    return(
        <div> 
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer