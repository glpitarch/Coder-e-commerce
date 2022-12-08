import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catalogue from '../catalogue/catalogue.js';
import Item from './Item';


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryId, material } = useParams(null);

/* <----------//_Render catalogue_//----------> */ 
const getItems = new Promise((resolve) => {
  setTimeout(() => {
      resolve( catalogue )
  }, 2000);
})

  useEffect(() => {
    getItems.then((result) => {
      setProducts(result) 
      if (categoryId) {
        const filterByCategory = result.filter((product) => product.category == categoryId)
        setProducts(filterByCategory)
      }
      if (categoryId && material) {
        const filterByCategoryAndMaterial = result.filter((product) => product.category == categoryId && product.material == material)
        setProducts(filterByCategoryAndMaterial)
      }
    });
  }, [categoryId, material]);

  return (
    <>
      <div className='container-md pt-5'>
        <div className="row row-cols-1 row-cols-md-3 gap-sm-4">
          {products.map((product) => (
            <Item
            key={ product.id }
            image={ product.image }
            name={ product.name }
            description={ product.description }
            stock={ product.stock }
            id={ product.id }/>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
