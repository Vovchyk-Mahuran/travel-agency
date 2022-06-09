import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import '../assets/styles/TourDetails.scss';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { Form, Button } from 'react-bootstrap';
import { onAdd, sortByPrice } from '../reducers/tourReducer';

function EditTour() {
  const location = useParams();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const selectedTour: Tour | undefined = tours.find((tour:Tour) => tour.id === location.id);

  if (!selectedTour) return null;// for checking if it exists
  const [id, setId] = useState(selectedTour.id);
  const [name, setName] = useState(selectedTour.name);
  const [price, setPrice] = useState(selectedTour.price);
  const [photo, setPhoto] = useState(selectedTour.photo);
  const [tour, setTour] = useState(selectedTour);

  const newTour = {
    id,
    name,
    price,
    photo,
  }

  return (
    <div className="content">
     <Form className="tours__form" method="POST">
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <input value={id} type="text" placeholder="Enter id" onChange={(e)=>setId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <input name="name" value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Label>Price</Form.Label>
          <input type="number" value={price} onChange={(e)=>setPrice(+e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Label>Img src</Form.Label>
          <input type="text" value={photo} onChange={(e)=>setPhoto(e.target.value)} />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            console.log(newTour);
            setTour(newTour)
          }}
        >
          UPDATE
        </Button>
      </Form>
    </div>
  );
}
export default EditTour;
