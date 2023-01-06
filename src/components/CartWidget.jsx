import ShoppingCart from '../assets/images/icons/empty-shopping-cart.png';
import { useCartContext } from '../contexts/CartContext';

const CartWidget = () => {

  const { qtyInCart } = useCartContext()

  return (
    
      <>
        <div> 
          <p className='ColorGrayLike'><img width='64' src={ ShoppingCart }/><button className='btn btn-dark mt-2 ms-2'>Productos <br/> en tu carro: { `${qtyInCart}` }</button> </p>
        </div>
      </>
  );
}

export default CartWidget;
