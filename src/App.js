
import './App.css';


import { Navbar } from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Shop} from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.jpg'
import women_banner from './Components/Assets/women_banner.jpg'
import kids_banner from './Components/Assets/kids_banner.jpg'




function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kids"></ShopCategory>}></Route>
        <Route path="/product" element={<Product></Product>}>
         <Route path=':productId' element={<Product></Product>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}


export default App; 
