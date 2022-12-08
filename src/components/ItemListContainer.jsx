import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catalogue from '../catalogue/catalogue.js';
import Item from './Item';


const ItemListContainer = () => {

  const [products, setProducts] = useState(catalogue);
  const [product, setProduct] = useState(null);
  const { categoryId, material } = useParams(null);

/* <----------//_Render catalogue on start_//----------> */ 
const getItems = new Promise((resolve) => {
  setTimeout(() => {
    if (categoryId == null) {
      resolve(  
        products.map((product) =>
        <Item
          image={ product.image }
          name={ product.name }
          description={ product.description }
          stock={ product.stock }
          id={ product.id }
        />))
    }
  }, 0);
})

  useEffect(() => {
    getItems.then((result) => setProduct(result));
  }, []);


/* <----------//_Render products by categoryId Params_//----------> */ 
const getItemsByCategoryParams = new Promise((resolve) => {
  resolve(  
    products.map((product) =>
    product.category == categoryId ? 
    <Item
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }/>
      : null ))
  })
  
    useEffect(() => {
      getItemsByCategoryParams.then((result) => setProduct(result));
    }, [categoryId]);


/* <----------//_Render products by categoryId && material Params_//----------> */ 
const getItemsByMaterialParams = new Promise((resolve) => {
  resolve(  
    products.map((product) =>
    (product.category === categoryId && product.material === material) ? 
    <Item
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }/>
      : null ))
  })
  
    useEffect(() => {
      getItemsByMaterialParams.then((result) => setProduct(result));
    }, [material]);


  return (
    <>
      <div className='container-md pt-5'>
        <div className="row row-cols-1 row-cols-md-3 gap-sm-4">
          {product}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
