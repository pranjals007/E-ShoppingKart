import axios from 'axios';

const User_postUrl = "http://localhost:9090/profile/add";

class Service{
createUser(User){
    return axios.post(User_postUrl, User)
}
}
export default new Service;