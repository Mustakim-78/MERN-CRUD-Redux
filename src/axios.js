import axios from 'axios';

const instance = axios.create({
    baseURL : "https://merncruddemo.herokuapp.com/"
})

export default instance;