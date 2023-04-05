import React from 'react'

import { useNavigate } from 'react-router-dom';

const Roundimg = () => {
   
   const navigate = useNavigate();
  return (
    <>
    <h1 id='round'>OUR COLLECTIONS</h1>
    <div  class="d-flex flex-row mb-3 container-fluid">
      
       
            <div class="container-fluid   bd-highlight"><a href='#'  onClick={()=>navigate("/kids")}> kids</a>
              
            </div>
            <div class="container-fluid bd-highlight"><a href='#'  onClick={()=>navigate("/menformal")}> mens Formal</a>
            
            </div>
            <div class="container-fluid bd-highlight" ><a href='#'  onClick={()=>navigate("/mencasual")}>   Mens Casual</a>
             
            </div>
            <div class="container-fluid bd-highlight"><a href='#'  onClick={()=>navigate("/Womensformal")}> Womens Formals</a>
              
            </div>
            <div class=" container-fluid bd-highlight"><a href='#'  onClick={()=>navigate("/womenscasual")}>Womens Cool</a>
               
            </div>
            <div class="container-fluid bd-highlight" ><a href='#'  onClick={()=>navigate("/old")}>Old</a>
            
            </div>
        </div>


     
        </>

  )
}

export default Roundimg;