import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className='bg-light min-vh-100'>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
