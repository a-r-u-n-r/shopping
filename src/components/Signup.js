import React, {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import SignupService from "../service/SignupService";
import {emailValidator,phoneValidator,passwordValidator,userValidator} from "../validatior/Validator"
import { useEffect } from 'react';
import Profile from './Profile';
import { useDispatch } from 'react-redux';
import {signupn} from "./SignupSlice"
import axios from 'axios';

const Signup= () => {
  
  const navigate = useNavigate(); 
  const [signup, setSignup] = useState({
    //id:"",
    name:"",
    emailid:"",
    phone:"",
    password:"",
    
  });
  

  const [mailerror,setMailError]=useState("");
  const [phoneerror,setPhoneError]=useState("");
  const [passworderror,setPasswordError]=useState("");
  const [nameerror,setnameError]=useState("");
  const [successmsg,setSuccessMessage]=useState("");
 


  

  const manageChange=(e)=>{
    const value=e.target.value;
    setSignup({...signup,[e.target.name]:value});
  };

  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(signupn({
          id:'',
          name:signup.name,
          emailid:signup.emailid,
          phone:signup.phone,
          password:signup.password,
    }))
  }
  const submitfu=(e)=>{
    saveSignup(e)
    handleSubmit(e)
  }
  


  const saveSignup=(e)=>{
    e.preventDefault();
    if(!userValidator(signup.name)) return setnameError("* please enter a valid name");

    if(!emailValidator(signup.emailid)) return setMailError("* please enter a valid email Id");
     
     if(!phoneValidator(signup.phone)) return setPhoneError("* phone should be 10 numbers");

     if(!passwordValidator(signup.password)) return setPasswordError("* The Password mustbr strong");

    setSuccessMessage("signup successfully !");

    if(successmsg){
      return(
    SignupService.saveSignup(signup).then((response)=>{
      console.log(response);
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error);
      
    }))}
    
  }

    return (
      <>
    
        <div className='container  '>
      <form  onSubmit={(e)=>handleSubmit(e)}>
        <h3>Sign up</h3>
        {successmsg.length > 0 && 
(<h2 style={{color:"green",textAlign:"center"}}>{successmsg}</h2>)}

{nameerror.length > 0 && 
(<div style={{color:"red"}}>{nameerror}</div>)}

        <div className="mb-3">
          <label>name</label>
          <input
            type="text"
             name="name"
             value={signup.name}
             onChange={(e)=>manageChange(e)}
            className="form-control"
            placeholder="Enter Name"
          />
         
        </div>
        <div className="mb-3">
{mailerror.length > 0 && 
(<div style={{color:"red"}}>{mailerror}</div>)}

          <label>Emailid</label>
          <input
            type="email"
            name="emailid"
            value={signup.emailid}
            onChange={(e)=>manageChange(e)}
            className="form-control"
            placeholder="Enter email"
          />
{phoneerror.length > 0 && 
(<div style={{color:"red"}}>{phoneerror}</div>)}          
          
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={signup.phone}
            onChange={(e)=>manageChange(e)}
            className="form-control"
            placeholder="Enter phone"
          />

          {passworderror.length > 0 && 
(<div style={{color:"red"}}>{passworderror}</div>)}
          
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signup.password}
            onChange={(e)=>manageChange(e)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
       
        <p>already have account <a href='#' onClick={()=> navigate("/login")}> click here</a> to signin </p>
        <div className="d-grid">
          <button  onClick ={submitfu}
        type="submit" className="btn btn-success btn-lg btn-block">
            Signup
          </button>
        </div>
      </form>
      </div>
      </>
     
    );
  };
export default Signup;
