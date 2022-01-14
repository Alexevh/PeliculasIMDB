import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '512b518d35205e6b74e14dd449bc0457',
        language: 'es-ES'
    }
});


export default movieDB;


