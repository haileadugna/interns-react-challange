import axios from 'axios';

// const axios = require('axios');
export default  axios.create({
    baseURL: 'https://swapi.py4e.com/api',
});
