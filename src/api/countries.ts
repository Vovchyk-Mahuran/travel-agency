import axios from 'axios';
const service = axios.create({
    baseURL: `${process.env.REACT_APP_API}/countries`
});

const getCountries = () => service.get('');

const CountriesAPI = {
    getCountries,
};

export default CountriesAPI;


