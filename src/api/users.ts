import axios from 'axios';
const service = axios.create({
    baseURL: `${process.env.REACT_APP_API}/users`
});

const getAllUsers = () => service.get('');

const registerUser = (user: any) => {
    service.post('/', user);
    localStorage.setItem('travel_token', JSON.stringify(user));
};
// const deleteById = (id:any) => service.delete(id);

const UsersAPI = {
    getAllUsers,
    registerUser
};

export default UsersAPI;


