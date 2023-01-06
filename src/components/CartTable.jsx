import { useCartContext } from '../contexts/CartContext';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const CartTable = () => {

    const { cart, removeProduct, clearCart } = useCartContext()

    const [totalPurcharse, setTotalPucharse] = useState(0)

    const bodyTableRender = () => cart.map(product => (
        <tr key={product.id}>
            <td>{product.quantity}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity * product.price}</td>
            <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}> X </button></td>
        </tr>
    ))


    useEffect(() => {
        setTotalPucharse(
          cart
            .map((product) => product.quantity * product.price)
            .reduce((accu, item) => (accu + item),0)
        );
      }, [cart]);

    return (
        <>
            <Table striped bordered hover size="sm" className='text-center'>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Artículo</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bodyTableRender()}
                    <tr>
                        <th colSpan={3} className='py-2'>El total de su compra es: </th>
                        <th className='py-2'>${totalPurcharse}</th>
                        <th className='py-2'></th>
                    </tr>
                </tbody>
            </Table>
            <p className='text-center'>Si desea retirar todos los productos de su carro de compras haz... {<button className="btn btn-danger" onClick={() => clearCart()}>CLICK AQUI</button>}</p>
        </>
    );
}

export default CartTable;