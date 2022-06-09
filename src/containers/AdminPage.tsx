import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../assets/styles/Tours.scss';

import { onAdd, onDeleteTour, sortByPrice } from '../reducers/tourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { RootState } from '../store/store';
// import Search from '../components/Search';
import Loading from '../components/Loading';

function AdminPage() {
  const dispatch = useDispatch();
  const tours: Array<Tour> = useSelector((state: RootState) => state.tour.tours);
    const isAuth: boolean = useSelector((state: RootState) => state.user.isAuth);
    const isAdmin: boolean = useSelector((state: RootState) => state.user.isAdmin);
  const [id, setId] = useState('0');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState('');

  // if(!tours.length) return <Loading/>

  const newTour: Tour = {
    id,
    name,
    price,
    photo,
  };

  return (
    <div className="content">
      <div className="tours row justify-content-around">
          {/* <Search/> */}
            {tours.length ? tours.map((tour: Tour) => (
              <Card key='' className="tours__tour tour">
                <Card.Img className="tour__img" variant="top" src={tour.photo} />
                <Card.Body className="tour__body">
                  <Card.Title className="tour__title">{tour.name}</Card.Title>
                  <Card.Text className="tour__price">
                    {tour.price}
                    $
                  </Card.Text>
                  <div className="tour__buttons">
                    <Button variant="variant"><Link to={`/tours/${tour.id}`}>OPEN DETAILS</Link></Button>
                    <Button variant="success" className="tour__edit"><Link to={`/tours/${tour.id}/edit`}>EDIT</Link></Button>
                    <Button variant="danger" onClick={() => dispatch(onDeleteTour(tour.id))}>DELETE</Button>
                  </div>
                </Card.Body>
                {tour.discount>0 && <span className="tour__discount">-{tour.discount}%</span>}
              </Card>
            )): <Loading/>}
            <div />
              <Form className="tours__form">
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                  <Form.Label>ID</Form.Label>
                  <input value={id} type="text" placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <input name="name" value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                  <Form.Label>Price</Form.Label>
                  <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                  <Form.Label>Img src</Form.Label>
                  <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(onAdd(newTour));
                  }}
                >
                  Add new tour
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    dispatch(sortByPrice());
                  }}
                >
                  Sort by price
                </Button>
              </Form>
      </div>
    </div>
  );
}
export default AdminPage;
