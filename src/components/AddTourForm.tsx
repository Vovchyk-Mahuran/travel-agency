import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddTour } from '../reducers/tourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { RootState } from '../store/store';
import { Row, Col, Button, Form } from 'react-bootstrap';

function AddTourForm() {
  const dispatch = useDispatch();
  const countries: Array<string> = useSelector((state: RootState) => state.tour.countries);
  const adminName: string = useSelector((state: any) => state.user.user.name);
    
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [pets, setPets] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const newTour: Tour = {
    name,
    price,
    discount,
    from,
    to,
    pets,
    breakfast,
    photo,
    description,
    owner: adminName,
  };

  return (
    <div className="content">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTourName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter tour's name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTourPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" onChange={(e) => setPrice(+e.target.value)}/>
          </Form.Group>
        </Row>
        <Row className="align-items-center">
          <Form.Group as={Col} className="mb-3" controlId="formGridDiscount">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" min="0" max="99" onChange={(e)=> setDiscount(+e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridPhoto">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" onChange={(e) => setPhoto(e.target.value)}/>
          </Form.Group>  
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country from</Form.Label>
            <Form.Select name="countryFrom" defaultValue="Choose country from..." onChange={(e) => setFrom(e.target.value)}>
              <option>Choose...</option>
              {countries.map((country) => <option>{country}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country to</Form.Label>
            <Form.Select name="countryTo" defaultValue="Choose country to..." onChange={(e) => setTo(e.target.value)}>
              <option>Choose...</option>
              {countries.map((country) => <option>{country}</option>)}
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-start">
          <Form.Group as={Col} className="mb-3" id="formGridWithPets">
            <Form.Label>Pets</Form.Label>
            <Form.Check name="pets" type="switch" onChange={(e) => setPets(e.target.checked)}/>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" id="formGridBreakfast">
            <Form.Label>Breakfasts</Form.Label>
            <Form.Check name="breakfast" type="switch" onChange={(e) => setBreakfast(e.target.checked)}/>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => {
            dispatch(AddTour({ ...newTour, adminName }));
            console.log('Added by ', adminName);
            }}>
        Add Tour
        </Button>
      </Form>
    </div>
  );
}
export default AddTourForm;
