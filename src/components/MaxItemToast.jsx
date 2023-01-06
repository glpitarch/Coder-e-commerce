import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function MaxItemToast({setMaxToast}) {

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
              <button onClick={()=>{setMaxToast(false)}} className='btn btn-dark'> X </button>
            </Toast.Header>
            <Toast.Body>Fue alcanzado el máximo disponible del stock</Toast.Body>
          </Toast>
        </ToastContainer>
    </>
  );
}

export default MaxItemToast;