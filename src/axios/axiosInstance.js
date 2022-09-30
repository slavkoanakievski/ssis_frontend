import axios from 'axios';

const instance = axios.create({
    baseURL: "https://ssislearning.azurewebsites.net/api/",
    //     baseURL: "http://localhost:8080/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    }
});
export default instance;