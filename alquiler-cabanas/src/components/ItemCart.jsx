import React from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { useCartContext } from "../context/CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className='background'>
            <Card style={{
            width:'30rem'
            }}>
                <img
                alt={product.nombre}
                src={product.img}/>
                <CardBody >
                    <CardTitle tag="h5">
                        {product.nombre}
                    </CardTitle>
                    <CardSubtitle className="md-2 text-muted" tag="h6">
                        Precio: ${product.price}
                    </CardSubtitle>
                    <CardText style={{marginBottom:0}}>
                        Estado: {product.disponibilidad}
                    </CardText>
                    <CardText style={{marginBottom:0}}> 
                        Categoria: {product.categoria}
                    </CardText>
                    <CardText> Descripcion: {product.descripcion} </CardText>
                    <CardText> Precio por Dia: ${product.price }</CardText>

                    <CardText>Subtotal: ${product.quantity * product.price}</CardText>
                    <button onClick={()=> removeProduct(product.id)}>ELIMINAR</button>
                </CardBody>
            </Card>
        </div>
    )
}
export default ItemCart