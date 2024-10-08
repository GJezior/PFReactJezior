import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Error from './components/Error/Error';
import CartProvider from './context/CartContext/CartProvider';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  return (
    <>

      <CartProvider>

      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>

          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

          <Route path='/item/:id' element={<ItemDetailContainer/>}/>

          <Route path='/cart' element={<Cart/>}/>

          <Route path="/checkout" element={<Checkout/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>

      </BrowserRouter>

      </CartProvider>

    </>
  )
}

export default App
