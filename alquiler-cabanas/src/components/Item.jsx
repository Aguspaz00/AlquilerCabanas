import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({info}) => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '28rem', marginTop: '10px' }}>
        <Card.Img variant="top" src={info.img} alt={info.nombre} />
        <Card.Body>
          <Card.Title>{info.nombre}</Card.Title>
          <Card.Text>
             Lorem ipsum dolor sit amet consectetur
            <Card.Title className="mt-2 text-black"> Precio: ${info.price}</Card.Title>
          </Card.Text>
          <Button variant="primary"><Link to={`/detalle/${info.id}`} className='Link1'>Ver detalles</Link></Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Item;
