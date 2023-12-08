import { useState } from 'react';
import {Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';



export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }
    return(
        <div className='background'>
            <Card style={{
            width:'30rem'
            }}>
                <img
                alt={data.nombre}
                src={data.img}/>
                <CardBody >
                    <CardTitle tag="h5">
                        {data.nombre}
                    </CardTitle>
                    <CardSubtitle className="md-2 text-muted" tag="h6">
                        Precio: ${data.price}
                    </CardSubtitle>
                    <CardText style={{marginBottom:0}}> 
                        Categoria: {data.categoria}
                    </CardText>
                    <CardText> Descripcion: {data.descripcion} </CardText>
                    <CardText className='footer'>
                        {
                            goToCart
                            ? <Link to='/cart'>Terminar Compra</Link>
                            : <ItemCount initial={1} stock={6} onAdd={onAdd}/>
                        }
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
        
   
export default ItemDetail