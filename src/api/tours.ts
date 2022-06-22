import axios from 'axios';
const service = axios.create({
    baseURL: `${process.env.REACT_APP_API}/tours`
});

const getAll = () => service.get('');
const addTour = (tour:any) => service.post('/',tour);
const deleteById = (id: any) => service.delete(id);
const editTour = (tour:any) => service.put(`${tour.id}`,tour)

const TourAPI = {
    getAll,
    addTour,
    deleteById,
    editTour,
};

export default TourAPI;


