import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from "./Navbar"
const Profile = () => {
  const signup=useSelector(state=>state.signup.value)
  var user=localStorage.getItem("user")
  
  var password=localStorage.getItem("password")
  
  var phone=localStorage.getItem("phone")
  
  var email=localStorage.getItem("email")
  const logout=()=>{
    localStorage.clear()
  }
 
  
  return (
    <>
    <Navbar></Navbar>
    <button className='btn btn-danger' onClick={logout}>logout</button>
    <div className='container'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMUbNT6BVsVPSGn15HNxVCq7BjN_nrx42jw&usqp=CAU' alt='profile'></img>
      <h3>{user}</h3></div>
      <hr></hr>
      <div>
      <h1 className='text-center'>Personal Details</h1>
      <hr></hr>
      <div>
      <h3>PHONE:{phone}</h3>
      <h3>EMAILID:{email}</h3>
      <h3>PASSWORD:{password}</h3>
      </div>
    </div>
   
    </>
  )
}

export default Profile