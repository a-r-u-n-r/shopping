import axios from 'axios';
class SignupService{
saveSignup(signup){
 return axios.post("http://localhost:5001/create",signup);
}
}
export default new SignupService();