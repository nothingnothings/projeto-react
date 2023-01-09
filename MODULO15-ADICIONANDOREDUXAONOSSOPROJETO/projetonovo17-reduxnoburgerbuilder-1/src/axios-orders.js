import axios from 'axios';



const instance = axios.create(
    {
        baseURL: 'https://burgerbuilder201051-default-rtdb.firebaseio.com/',


    }
);




export default instance;