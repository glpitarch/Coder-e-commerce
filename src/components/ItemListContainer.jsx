import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getAllProducts } from '../queries/products';
import { getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryId, material } = useParams();

  useEffect(() => {
    const db = getFirestore();
    getAllProducts(db)
      .then((item) => {
        setProducts(item)
      })
  }, []);

  useEffect(()=> {
    const db = getFirestore();
    getAllProducts(db)
    .then((result) => {
        setProducts(result) 
        if (categoryId) {
          const filterByCategory = result.filter((product) => product.category == categoryId)
          setProducts(filterByCategory)
        }
        if (categoryId && material) {
          const filterByCategoryAndMaterial = result.filter((product) => product.category == categoryId && product.material == material)
          setProducts(filterByCategoryAndMaterial)
        }
      })
    }, [categoryId, material]);


  const renderProducts = () => (
    products.map((product) => (
      <Item
      key={ product.id }
      image={ product.image }
      name={ product.name }
      description={ product.description }
      stock={ product.stock }
      id={ product.id }/>
    ))
  )

  return (
    <>
      <div className='container-md pt-5'>
        <div className="row row-cols-1 row-cols-md-3 gap-sm-4 justify-content-md-center">
          {renderProducts()}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
