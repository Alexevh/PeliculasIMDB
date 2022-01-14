import axios from 'axios';

/* Change the name of the file to MoveDB.tsx and fill your own api_key from IMDB */

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'YOUR-API-KEY',
        language: 'es-ES'
    }
});


export default movieDB;


