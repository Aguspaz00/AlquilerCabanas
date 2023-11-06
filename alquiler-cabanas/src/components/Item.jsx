import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';


const Item = ({id, nombre, img, precio}) =>{
    return(
        <div style={{display:'flex'}}>
            <Container>
            <Row>
                <Col md={6}>
                    <Card
                    body
                    style={{
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
                            <Link to={`/item/${id}`}>Ver detalles</Link>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Item