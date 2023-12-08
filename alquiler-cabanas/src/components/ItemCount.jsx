import { useState, useEffect } from "react";

export const ItemCount = ({stock, initial, onAdd}) => { 

    const [count, setCount] = useState(parseInt(initial));


    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
         setCount(count - 1)
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return(
        <div className="contador">
            <div>
                AGREGAR CANTIDAD DE DIAS
            </div>
                <button disabled= { count <= 1} onClick={decrement}>-</button>
                <span> {count}</span>
                <button disabled={ count >= stock} onClick={increment}>+</button>
            <div>
                <button disabled={stock <= 0 } onClick={() => onAdd(count)}> Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount