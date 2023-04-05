
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { BsCartFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import {BsFillPersonFill } from "react-icons/bs";
import {BsFillPeopleFill } from "react-icons/bs";
import {BsSearch } from "react-icons/bs";
import {BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Badge from "react-bootstrap/Badge"

const Navbar = () => {
    const navigate = useNavigate(); 
  return (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
   
    <h2>Tiptop Trendz</h2><br></br>
   
    <div className="col-md-6 mb-4">


<form className="form-inline md-form form-sm mt-0">
  <BsSearch/>
  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
</form>

</div>
    <div className="d-flex flex-row bd-highlight mb-3">
      
  <div id="icon" className="p-2 bd-highlight"><a href='#'  onClick={()=>navigate("/home")}><BsHouseDoorFill size={30}  color="blue"  /></a></div>

  <div id="icon" className="p-2 bd-highlight"><a href='#'  onClick={()=>navigate("/shopping")}><BsCartFill size={30}  color="blue" /></a></div>
  <Dropdown >
    <DropdownToggle variant="Light">
      <div><a href='#'  onClick={()=>navigate("/cart")}>
    <BsFillHeartFill size={28} color="blue" /></a>
    </div>
    <Badge>{10}</Badge>
    </DropdownToggle>
  </Dropdown>
  

  <div id="icon" className="p-2 bd-highlight">
   
    <a href='#'><BsFillPeopleFill size={30}  color="blue" /></a>
    </div>

   <div id="icon" className="p-2 bd-highlight"><a href='#'  onClick={()=>navigate("/profile")}><BsFillPersonFill size={30}  color="blue" /></a></div>

</div>
  </div>
  <h5>Just Dress Neat</h5>
  </nav>


  )
}

export default Navbar








//<div id="icon" className="p-2 bd-highlight"><a href='#'  onClick={()=>navigate("/un")}><BsFillHeartFill size={30}/></a></div>