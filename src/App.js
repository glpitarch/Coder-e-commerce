import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId/:material' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId/item/:id' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId/:material/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
