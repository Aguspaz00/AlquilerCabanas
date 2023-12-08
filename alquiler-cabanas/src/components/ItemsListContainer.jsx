import React from "react"
import { useState,useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import {
    collection,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";




export const ItemsListContainer = ({saludo}) => {

    const [data, setData] = useState ([]);
    const { categoriaId } = useParams();

    useEffect(()=> {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");
        if (categoriaId){
            const queryFilter = query(
                queryCollection,
                where("categoria", "==", categoriaId)
            );
            getDocs(queryFilter).then((res) => 
            setData(
                res.docs.map((product) => ({ id: product.id, ...product.data() })),
                ),
            );
        }else{
            getDocs(queryCollection).then((res) => 
            setData(
                res.docs.map((product) => ({ id: product.id, ...product.data() })),
                ),
            );
        }
    }, [categoriaId])
    
    return (
        <div className="background">
            {saludo} 
            <ItemList data={data}/>
            
        </div>
    )
}
export default ItemsListContainer