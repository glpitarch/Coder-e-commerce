import ShoppingCart from '../assets/images/icons/empty-shopping-cart.png';

const CartWidget = () => {
  return (
    
      <>
        <div> 
          <p className='ColorGrayLike'><a href="" className='pe-3'><img width='64' src={ShoppingCart} /></a> Productos en el carrito: 0</p>
        </div>
      </>
  );
}

export default CartWidget;
