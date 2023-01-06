import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import ItemCount from './ItemCount';
import { useCartContext } from '../contexts/CartContext';
import AlertToast from "../components/AlertToast";

const ProductDetail = ({ id, image, name, price, description, stock }) => {

    const { addProduct, quantity, showAlertToast, setShowAlertToast } = useCartContext()

    useEffect(()=> {
        setTimeout(()=>{setShowAlertToast(false)},6000)
    }, [showAlertToast])

    return (
        <>
            <Card style={{ width: '18rem' }} className="text-center">

                <img src={ image } className='mt-3'/>

                <Card.Body>
                    <Card.Title className='mb-4'>{ name }</Card.Title>

                    <Card.Text>Precio: { price }</Card.Text>

                    <Card.Text className='mb-4'>{ description }</Card.Text>

                    <ItemCount stock={ stock } />

                    <div>
                        <Link><button className='mt-4 btn btn-success' onClick={()=>addProduct(id, quantity, image, name, price, description, stock) }>Agregar al carrito</button></Link>
                    </div>

                    <Link to='/'><button className='my-3 btn btn-secondary'>Volver al home</button></Link>
                    
                    <Card.Text className='pt-2'>Stock disponible: { stock }</Card.Text>
                </Card.Body>
                
            </Card>

            {showAlertToast 
                ?   <AlertToast/> 
                :   null
            }
        </>
    )
};

export default ProductDetail