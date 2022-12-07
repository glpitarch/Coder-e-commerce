import { Link } from 'react-router-dom';
import ShoppingCart from '../assets/images/icons/empty-shopping-cart.png';

const CartWidget = () => {
  return (
    
      <>
        <div> 
          <p className='ColorGrayLike'><Link to='item'><img width='64' src={ShoppingCart} /></Link> Productos en el carrito: 0</p>
        </div>
      </>
  );
}

export default CartWidget;
