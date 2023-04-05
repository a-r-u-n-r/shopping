import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Shopping from './components/Shopping';
import Home from './components/Home';
import Old from './components/Old';
import Kids from './components/Kids';
import MenCasual from './components/MenCasual';
import WomensCasual from './components/WomensCasual';
import MenFormal from './components/MenFormal';
import WomensFormal from './components/WomensFormal';
import ProductList from './components/ProductList';
import React from "react"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import ProductComponent from './components/ProductComponent';
import Profile from './components/Profile';
import CartsList from './components/CartsList';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup></Signup>}/>
      <Route  path="/shopping" element={<Shopping/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/kids" element={<Kids/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/productcomponent" element={<ProductComponent/>} />
      
      <Route path="/cart" element={<CartsList/>} />
      <Route path="/productslist" element={<ProductList/>} />
      <Route path="/mencasual" element={<MenCasual/>} />
      <Route path="/womenscasual" element={<WomensCasual/>} />
      <Route path="/menformal" element={<MenFormal/>} />
      <Route path="/Womensformal" element={<WomensFormal/>} />
      <Route path="/old" element={<Old/>} />
      <Route path="/o" element={<ProductList/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}


