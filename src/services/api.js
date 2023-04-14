import axios from 'axios';
//Base da URL https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=db2c07d3dd824792633889a037e86784

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;