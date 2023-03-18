
import Navbar from './Navbar'
import Product from './Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import {Provider} from 'react-redux';
import store from './store/Store'

function App() {
  return (
    <div>
      <Provider store= {store}>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        
      </Routes>
      </BrowserRouter>

      </Provider>
    </div>


  );
}

export default App;
