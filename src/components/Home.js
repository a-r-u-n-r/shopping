import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

import Navbar from './Navbar';

const Home = () => {
    const navigate = useNavigate(); 
  return (
    <>
    <Navbar></Navbar>
    <div></div>
    <div className='row '>
    <div class="col-xs-6" id='homeimg'>
        <img src='https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGUlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='shop'></img>
        </div>
        <div className='col-xs-6' id="hometext">
            <h1 id='homehead'>Welcome to Tiptop Trendz</h1>
            <h2 id='homelhead'>Look Style Wear Styles</h2><br></br>
            <br></br>
            <br></br>
            <h1>10000+ Rare Designs</h1>
            <h2>1000+ Designers Across The World</h2><br></br>
            <p>click <a href='#' onClick={()=>navigate("/login")}>here </a>to Login</p>
            <h4>Enjoy your shopping</h4>
        </div>
        <div class="col-xs-6" id='homeimg2'>
        <img src='https://media.istockphoto.com/photos/lady-evening-dress-elegant-woman-in-long-gown-with-tail-well-dressed-picture-id912185942?k=20&m=912185942&s=612x612&w=0&h=UlwMjrv5LQ1XvAflqQk8T1iAJwHZcHQTXf5mbcQsKpY=' ></img>
        </div>
        </div>
        <hr></hr>
        <div id='homebtext'>
        <h1>Why We </h1>
        <div className='d-inline-flex p-2 bd-highlight mb-3'>
            <div className='p-2 bd-highlight'  class="btext">goog customer service</div>
            <div className='p-2 bd-highlight'  class="btext">Varity of Designs</div>
            <div className='p-2 bd-highlight'  class="btext">Faster delivery</div>
            <div className='p-2 bd-highlight'class="btext" >Warrenty</div>
        </div>
        </div>
       <Footer/>
        </>
  )
}

export default Home