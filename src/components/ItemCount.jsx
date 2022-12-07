import React, { useState } from "react";

const ItemCount = ( { stock } ) => {
    const [counter, setCounter] = useState(0);
  
    const handleIncrement = () => {
      counter < stock ? setCounter(counter + 1) : alert('se alcanzo el maximo disponible del stock');
    }
    const handleDecrement = () => {
      counter > 0 ? setCounter(counter - 1) : alert('se alcanzo el minimo disponible del stock');
    };
  
    return (
      <div>
          <span><button onClick={handleDecrement}  className='px-2'>-</button></span>
          <span><input type="button" value={ counter } className='px-4'/></span>
          <span><button onClick={handleIncrement}>+</button></span>
      </div>
    );
  };
  
  export default ItemCount;