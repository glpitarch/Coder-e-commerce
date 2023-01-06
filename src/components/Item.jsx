import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Product = ({ image, name, description, stock, id}) => {

    return (
        <Card style={{ width: '18rem' }} className="text-center">

            <img src={ image } className='mt-3'/>

            <Card.Body>
                <Card.Title>{ name }</Card.Title>

                <Card.Text>{ description }</Card.Text>

                <Link to={`item/${id}`}><button className='btn btn-secondary'>Detalles del producto</button></Link>

                <Card.Text className='pt-2'>Stock disponible: { stock }</Card.Text>
            </Card.Body>
            
      </Card>
    )
};

export default Product