import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Cart from './components/Cart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./contexts/CartContext";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId/:material' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/categoria/:categoryId/:material/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
