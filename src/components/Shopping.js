import React from 'react'
import Roundimg from './Roundimg'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from "./ProductList"
const Shopping = () => {
  return (
    
  <>
  <Navbar></Navbar>
  <hr></hr>
  <Roundimg></Roundimg>
 <br></br>
 <br></br>
 <br></br>
  <h1 class="menslider"></h1>
  <div class="carousel slide" data-ride="carousel" id="slider">

      <ol class="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" class="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
        <li data-target="#slider" data-slide-to="3"></li>
      </ol>

      <div class="carousel-inner">

        <div class="carousel-item active">
                <img class="d-block w-100" src="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=" alt='first image'></img>
                <div class="carousel-caption d-none d-md-block">
                      <h1>Mens' Formals</h1>
                     <p>...</p>
                </div>
          
        </div>

        

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/you-have-to-be-patient-picture-id1295385592?b=1&k=20&m=1295385592&s=170667a&w=0&h=_3WNL3b29Zag-9YHP9pAyzPs65YBA7Lt09G5cla5YZ0=" alt='2 image'></img>
          <div class="carousel-caption d-none d-md-block">
    <h5>Rare Designs</h5>
    <p>...</p>
  </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/assortment-of-mens-shirts-on-wooden-coat-hangers-picture-id1193219359?k=20&m=1193219359&s=612x612&w=0&h=DyqaYoz3pZjWrf7bRYTySeQGhTAVBe_AfxrZ2IKxviM=" alt='3 image'></img>
          <div class="carousel-caption d-none d-md-block">
    <h5>Perfect fits</h5>
    <p>...</p>
  </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA=" alt='4 image'></img>
          <div class="carousel-caption d-none d-md-block">
    <h5>Professional Look</h5>
    <p>...</p>
  </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev" >
        <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
     
      <div class="row">
        <div col-lg-4>
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="#" role="img" aria-label="placeholder:140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
        </div>
        </div>   
<h1 className='text-center'>MENS COLLECTION</h1>
<ProductList></ProductList>
        <hr></hr>

        <h1 class="menslider">Men,s Formal collection</h1>
  <div class="carousel slide" data-ride="carousel" id="slider">

      <ol class="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" class="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
        <li data-target="#slider" data-slide-to="3"></li>
      </ol>

      <div class="carousel-inner">

        <div class="carousel-item active">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=" alt='first image'></img>
          
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/you-have-to-be-patient-picture-id1295385592?b=1&k=20&m=1295385592&s=170667a&w=0&h=_3WNL3b29Zag-9YHP9pAyzPs65YBA7Lt09G5cla5YZ0=" alt='2 image'></img>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/assortment-of-mens-shirts-on-wooden-coat-hangers-picture-id1193219359?k=20&m=1193219359&s=612x612&w=0&h=DyqaYoz3pZjWrf7bRYTySeQGhTAVBe_AfxrZ2IKxviM=" alt='3 image'></img>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src="https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA=" alt='4 image'></img>
        </div>

      </div>
      <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
     
      <div class="row">
        <div col-lg-4>
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="#" role="img" aria-label="placeholder:140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
        </div>
        </div>
        <hr></hr>

        <div id="woffer">
          <img src="https://sslimages.shoppersstop.com/sys-master/root/h7a/h0d/27737764462622/main-banner-msite--hp-pg-wom-fashin1862022r.jpg" alt="offer sale women"></img>
        </div>
        
        <div>
          <div> pouplar desiners</div>
        </div>
        <hr></hr>


        <hr></hr>
        
        
        

<h1>Cool Picks for Miss</h1>
<div class="carousel slide" data-ride="carousel" id="slider2">

    <ol class="carousel-indicators">
      <li data-target="#slider" data-slide-to="0" class="active"></li>
      <li data-target="#slider2" data-slide-to="1"></li>
      <li data-target="#slider2" data-slide-to="2"></li>
      <li data-target="#slider2" data-slide-to="3"></li>
    </ol>

    <div class="carousel-inner">

      <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472_960_720.jpg" alt='first image'></img>
        
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='2 image'></img>
      </div>

      <div class="carousel-item active">
        <img class="d-block w-100" src="https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='3 image'></img>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='4 image'></img>
      </div>

    </div>
    <a class="carousel-control-prev" href="#slider2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#slider2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
   
    <div class="row">
      <div col-lg-4>
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="#" role="img" aria-label="placeholder:140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
      </div>
      </div>
      
      <hr></hr>

        <hr></hr>

      <h1>Hand Pick saree Designsn</h1>
<div class="carousel slide" data-ride="carousel" id="slider2">

    <ol class="carousel-indicators">
      <li data-target="#slider" data-slide-to="0" class="active"></li>
      <li data-target="#slider2" data-slide-to="1"></li>
      <li data-target="#slider2" data-slide-to="2"></li>
      <li data-target="#slider2" data-slide-to="3"></li>
    </ol>

    <div class="carousel-inner">

      <div class="carousel-item active">
        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472_960_720.jpg" alt='first image'></img>
        
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='2 image'></img>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='3 image'></img>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='4 image'></img>
      </div>

    </div>
    <a class="carousel-control-prev" href="#slider2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#slider2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
   
    <div class="row">
      <div col-lg-4>
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="#" role="img" aria-label="placeholder:140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
      </div>
      </div>
      
      <hr></hr>
      
      <Footer></Footer>
        </>
  )
}

export default Shopping