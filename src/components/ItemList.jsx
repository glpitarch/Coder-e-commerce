import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catalogue from '../catalogue/catalogue.js';
import Item from './Item';

const ItemList = () => {


  const [products, setProducts] = useState(catalogue);
  const [product, setProduct] = useState(null);
  const { categoryId } = useParams();

/*   const renderProduct = () =>
  products.map((product) =>
  <Item
    image={ product.image }
    name={ product.name }
    description={ product.description }
    stock={ product.stock }
    id={ product.id }
  />) */
  useEffect(() => {
    products.map((product) =>
    <Item
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }
    />)
  }, []);

/*   useEffect(() => {
    products.map((product) =>
    <Item
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }
    />)
  }, []); */
/*   const renderProductCategory = () =>
    products.map((product) =>
    product.category == categoryId ? 
    <Item
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }/>
      : null ) */



  return (
    <>
      <div className='container-md pt-5'>
        <div className="row row-cols-1 row-cols-md-3 gap-sm-4">
          {product}
{/*         {renderProduct()} */}
{/*         {renderProductCategory()} */}
        </div>
      </div>
    </>
  );
}

export default ItemList;
