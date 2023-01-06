import { useCartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartTable from './CartTable';

const Cart = () => {

    const { qtyInCart } = useCartContext()

    return (
    <div className='container-md mt-5'>
        <h1 className='text-center pb-5'>Tu carro de compras</h1>
        {qtyInCart > 0
            ?   <CartTable />
            :   <><h3 className='text-center mb-3'>Aún no tiene productos en su carro de compras.</h3>
                <h3 className='text-center'>Puede hacer click <Link to='/'>AQUI</Link> para visualizar nuestro catálogo.</h3></>
        }
    </div>
    );
}

export default Cart; 