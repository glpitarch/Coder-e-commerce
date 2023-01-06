import { useState, useEffect } from 'react';
import { getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getProductById } from '../queries/products';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
      const db = getFirestore();
      getProductById(db, id)
        .then((item) => {
          setProduct(item)
        })
    }, [id]);

    const renderProductDetail = () => 
      <ItemDetail
        key={ product?.id } 
        id={ product?.id }
        image={ product?.image } 
        name={ product?.name } 
        price={ product?.price } 
        description={ product?.description } 
        stock={ product?.stock } />   

    return (
      <>
        <div className='container-md pt-5'>
          <div className="row row-cols-1 row-cols-md-1 gap-sm-4 justify-content-md-center">
            {renderProductDetail()}
          </div>
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer;