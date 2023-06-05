import axios from "axios";
const BASE_URL="http://localhost:5001";
class LoginService{
 checkCustomer(login){
   return axios.get(BASE_URL+"/check/"+login.name+" "+login.password,login);
   
 }

}
export default new LoginService();

