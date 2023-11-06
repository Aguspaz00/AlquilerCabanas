import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

const ItemDetail = ({ nombre, img, precio, disponibilidad, categoria}) => {
    return(
        <div className='background'>
            <Card style={{
            width:'30rem'
            }}>
                <img
                alt={nombre}
                src={img}/>
                <CardBody >
                    <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardSubtitle className="md-2 text-muted" tag="h6">
                        Precio: ${precio}
                    </CardSubtitle>
                    <CardText style={{marginBottom:0}}>
                        Estado: {disponibilidad}
                    </CardText>
                    <CardText> 
                        Categoria: {categoria}
                    </CardText>
                </CardBody>
            </Card>
        </div>

    )
}
        
   
export default ItemDetail