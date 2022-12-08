import { useState } from 'react';
import catalogue from '../catalogue/catalogue.js'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState(catalogue)
    const { id } = useParams();

    const renderProductDetail = () => 

    products.map((product) => 
    product.id == id ? 
    <ItemDetail
        key={ product.id } 
        image={ product.image } 
        name={ product.name } 
        price={ product.price } 
        description={ product.description } 
        stock={ product.stock } /> 
    : null )
    

    return (
      <>
        <div className='container-md pt-5'>
        {renderProductDetail()}
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer;