import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const PRODUCT_COLLECTION = 'products';

    export const getAllProducts = (db) => {
        const collectionRef = collection(db, PRODUCT_COLLECTION);
        return getDocs(collectionRef)
        .then((dataFB) => {
            const products = [];
            dataFB?.docs?.forEach((item) => {
            products.push({
                id: item.id,
                ...item.data()
            })
            })
            return products;
        })
        .catch((error) => {
            return error;
        })
    }

  export const getProductById = (db, id) => {
    const documentRef = doc(db, PRODUCT_COLLECTION, id);
    return getDoc(documentRef)
      .then((dataFB) => {
        if(dataFB.exists){
          return {
            id: dataFB.id,
            ...dataFB.data()
          }
        }
      })
  }

