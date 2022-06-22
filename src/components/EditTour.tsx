import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TourEdit } from '../reducers/tourReducer';

function EditTour() {
  const location = useParams();
  const dispatch = useDispatch();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const selectedTour: Tour | undefined = tours.find((tour: Tour) => tour.id === location.id);
  const adminName = useSelector((state: RootState) => state.user.user?.name);

  if (!selectedTour) return null;// for checking if it exists
  const [name, setName] = useState(selectedTour.name);
  const [price, setPrice] = useState(selectedTour.price);
  const [photo, setPhoto] = useState(selectedTour.photo);
  const [discount, setDiscount] = useState(selectedTour.discount);
  const [description, setDescription] = useState(selectedTour.description);
  const [from, setFrom] = useState(selectedTour.from);
  const [to, setTo] = useState(selectedTour.to);
  const [pets, setPets] = useState(selectedTour.pets?.valueOf());
  const [breakfast, setBreakfast] = useState(selectedTour.breakfast?.valueOf());


  const countries = useSelector((state:RootState) => state.tour.countries);
  const newTour: any = {
    id:selectedTour.id,
    name,
    price,
    discount,
    from,
    to,
    pets,
    breakfast,
    photo,
    description,
  };

  return (
    <div className="content">
     <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTourName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} placeholder="Enter tour's name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTourPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={price} placeholder="Price" onChange={(e) => setPrice(+e.target.value)}/>
          </Form.Group>
        </Row>
        <Row className="align-items-center">
          <Form.Group as={Col} className="mb-3" controlId="formGridDiscount">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" value={discount} min="0" max="99" onChange={(e)=> setDiscount(+e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" value={photo} onChange={(e) => setPhoto(e.target.value)}/>
          </Form.Group>  
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country from</Form.Label>
            <Form.Select name="countryFrom" value={from} defaultValue="Choose country from..." onChange={(e) => setFrom(e.target.value)}>
              <option>Choose...</option>
              {countries.map((country) => <option>{country}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country to</Form.Label>
            <Form.Select name="countryTo" value={to} defaultValue="Choose country to..." onChange={(e) => setTo(e.target.value)}>
              <option>Choose...</option>
              {countries.map((country) => <option>{country}</option>)}
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-start">
          <Form.Group as={Col} className="mb-3" id="formGridWithPets">
            <Form.Label>Pets</Form.Label>
            <Form.Check name="pets" checked={pets} type="switch" onChange={(e) => setPets(e.target.checked)}/>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" id="formGridBreakfast">
            <Form.Label>Breakfasts</Form.Label>
            <Form.Check name="breakfast"checked={breakfast} type="switch" onChange={(e) => setBreakfast(e.target.checked)}/>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" value={description} rows={3} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => {
            dispatch(TourEdit({ ...newTour, adminName }));
          }}>
          UPDATE
        </Button>
      </Form>
    </div>
  );
}
export default EditTour;
