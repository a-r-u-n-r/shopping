import {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import LoginService from '../service/LoginService';
import {passwordValidator,userValidator} from "../validatior/Validator"
import { useDispatch } from 'react-redux';
import {loginn} from "./LoginSlice"
import axios from 'axios';

const BASE_URL="http://localhost:5001";
 const Login =()=> {
  const dispatch=useDispatch();
  const history=useNavigate;
  const navigate = useNavigate();
  const [login,setLogin] = useState(
    {
         id:"",
         name:"",
         password:""
  }
  ) ;
  
  const [passworderror,setPasswordError]=useState("");
  const [nameerror,setnameError]=useState("");
  const [successmsg,setSuccessMessage]=useState("");
  
  const [userexists,setUserexists]=useState("");
const handleChange = (e)=>{
  const value=e.target.value;
     setLogin({...login,[e.target.name]:value});
};


const handleSubmit=(e)=>{
  if(successmsg){
  e.preventDefault();
 
  dispatch(loginn({
        id:login.name,
        name:login.name,
        password:login.password,
        
  })
  )}
}

const submitfu=(e)=>{
  saveCustomer(e)
  handleSubmit(e)

}


  const saveCustomer=(e)=>{
    e.preventDefault();
    if(!userValidator(login.name)) return setnameError("* please enter a valid name")
    if(!passwordValidator(login.password)) return setPasswordError("* The Password mustbr strong")
   
   
  // if(successmsg)
   /// LoginService.checkCustomer(login).then((response)=>{
    //  console.log(response);
   // })
   //.catch((error)=>{
    //  console.log(error);
    //}); 

    const response = axios.get(BASE_URL+"/check/"+login.name+" "+login.password,login)
    .then((response)=>{
      if(response.data.name){
       // setSuccessMessage("login successfully !");
 localStorage.setItem("user",response.data.name)
 localStorage.setItem("password",response.data.password)
 localStorage.setItem("phone",response.data.phone)
 localStorage.setItem("email",response.data.emailid)
 navigate("/home")
 }
 return setUserexists("*name or password is wrong")
        })
        
    .catch((err)=>{
            console.log("Err",err);
          });
        console.log(response);
  }

    return (
        <>
       

      <div className='container  '>
      <form onSubmit={(e)=>handleSubmit(e)}  >
        <h3>LOGIN</h3>
        {successmsg.length > 0 && 
        (<h2 style={{color:"green",textAlign:"center"}}>{successmsg}</h2>)}

{userexists.length > 0 && 
        (<div style={{color:"red"}}>{userexists}</div>)}

        {nameerror.length > 0 && 
        (<div style={{color:"red"}}>{nameerror}</div>)}

        <div className="mb-3">
          <label>name</label>
          <input
            type="text" name="name" value={login.name} onChange={(e)=>handleChange(e)} className="form-control"
            placeholder="Enter id"/>
        </div>
        
        {passworderror.length > 0 && 
        (<div style={{color:"red"}}>{passworderror}</div>)}

        <div className="mb-5">
          <label>Password</label>
          <input type="password" name="password" value={login.password} onChange={(e)=>handleChange(e)} className="form-control" placeholder="Enter password"/>
        </div>
      
        <p>if you are new user <a href='#' onClick={()=>navigate("/")}>click here</a> to login </p>
        <div className="d-grid">
         

          <button  onClick ={submitfu}  type="submit" className="btn btn-success btn-lg btn-block">login</button>



         
        </div>
      </form>
      </div>
      </>
      
    );
  };
export default Login;

