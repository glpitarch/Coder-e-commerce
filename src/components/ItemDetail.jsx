import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ProductDetail = ({ image, name, price, description, stock}) => {

    return (
        <Card style={{ width: '18rem' }} className="text-center">

            <img src={ image } className='mt-3'/>

            <Card.Body>
                <Card.Title>{ name }</Card.Title>

                <Card.Text>Precio: { price }</Card.Text>

                <Card.Text>{ description }</Card.Text>

                <ItemCount stock={ stock }/>

                <div>
                    <Link><button className='my-3'>Agregar al carrito</button></Link>
                </div>

                <Link to='/'><button>Volver</button></Link>
                
                <Card.Text className='pt-2'>Stock disponible: { stock }</Card.Text>
            </Card.Body>
            
      </Card>
    )
};

export default ProductDetail