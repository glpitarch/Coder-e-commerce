import { useState, useEffect } from "react";
import { useCartContext } from '../contexts/CartContext';
import MinItemToast from "./MinItemToast";
import MaxItemToast from "./MaxItemToast";

const ItemCount = ( { stock } ) => {

  const { setQuantity } = useCartContext()

    const [count, setCount] = useState(1);
    const [maxToast, setMaxToast] = useState(false);
    const [minToast, setMinToast] = useState(false);

    useEffect(()=> {
      setTimeout(()=>{setMaxToast(false)},4000)
    }, [maxToast])

    useEffect(()=> {
    setTimeout(()=>{setMinToast(false)},4000)
    }, [minToast])

    useEffect(() => {
      setQuantity(count);
    }, [count]);

    const handleIncrement = () => {
      count < stock 
        ?   setCount(count + 1)
        :   setMaxToast(true)
      }
       
    const handleDecrement = () => {
      count > 1
        ?   setCount(count - 1)
        :   setMinToast(true) 
      }

    return (
      <>
        <div>
            <span><button onClick={ ()=>{handleDecrement()} }  className='px-3 btn btn-outline-danger border'>  -  </button></span>
            <span><input type="button" value={ count } className='px-4 btn btn-ligth border'/></span>
            <span><button onClick={ ()=>{handleIncrement()} } className='btn btn-outline-success border'>+</button></span>
        </div>

        {maxToast
            ?   <MaxItemToast setMaxToast={setMaxToast}/> 
            :   null
        }

        {minToast
            ?   <MinItemToast setMinToast={setMinToast}/> 
            :   null
        } 
      </>
    );
  };
  
  export default ItemCount;