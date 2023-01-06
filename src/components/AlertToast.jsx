import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useCartContext } from '../contexts/CartContext';

function AlertToast() {

  const { setShowAlertToast } = useCartContext()

  return (
    <>
        <ToastContainer className="p-3" position='middle-center' >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto text-center">¡Atención!</strong>
              <button onClick={()=>{setShowAlertToast(false)}} className='btn btn-dark'> X </button>
            </Toast.Header>
            <Toast.Body>La cantidad del producto que quieres agregar a tu carrito supera la cantidad del stock disponible</Toast.Body>
          </Toast>
        </ToastContainer>
    </>
  );
}

export default AlertToast;