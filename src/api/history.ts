import axios from 'axios';
const service = axios.create({
    baseURL: `${process.env.REACT_APP_API}/history`
});

const record = (write: any) => {
    service.post('', write);
    console.log(write)
}

const getAllHistory = () => service.get('');

const HistoryAPI = {
    record,
    getAllHistory,
};

export default HistoryAPI;


