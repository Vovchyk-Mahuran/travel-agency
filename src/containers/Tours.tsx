import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../assets/styles/Tours.scss';

import { onAdd, onDeleteTour, sortByPrice } from '../reducers/tourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { RootState } from '../store/store';

function Tours() {
  const dispatch = useDispatch();
  const tours: Array<Tour> = useSelector((state: RootState) => state.tour.tours);
  const isAuth : boolean = useSelector((state: RootState) => state.user.isAuth);
  const [id, setId] = useState('0');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState('');

  const newTour: Tour = {
    id,
    name,
    price,
    photo,
  };

  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className="tours row justify-content-around">
          {tours.map((tour: Tour) => (
            <Card key='' className="tours__tour tour">
              <Card.Img className="tour__img" variant="top" src={tour.photo} style={{ width: `${100}%` }} />
              <Card.Body className="tour__body">
                <Card.Title className="tour__title">{tour.name}</Card.Title>
                <Card.Text className="tour__price">
                  {tour.price}
                  $
                </Card.Text>
                <div className="tour__buttons">
                  <Button variant="variant"><Link to={`/tours/${tour.id}`}>OPEN DETAILS</Link></Button>
                  <Button variant="danger" onClick={() => dispatch(onDeleteTour(tour.id))}>DELETE</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          <div />
          {isAuth && (
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
          )}
        </div>
      </div>
    </div>

  );
}
export default Tours;
