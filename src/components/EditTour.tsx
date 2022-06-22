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
  const selectedTour: Tour | undefined = tours.find((tour:Tour) => tour.id === location.id);

  if (!selectedTour) return null;// for checking if it exists
  const [name, setName] = useState(selectedTour.name);
  const [price, setPrice] = useState(selectedTour.price);
  const [photo, setPhoto] = useState(selectedTour.photo);
  const [discount, setDiscount] = useState(selectedTour.discount);
  const [description, setDescription] = useState(selectedTour.description);
  const [from, setFrom] = useState(selectedTour.from);
  const [to, setTo] = useState(selectedTour.to);


  const countries = useSelector((state:RootState) => state.tour.countries);
  const newTour = {
    name,
    price,
    photo,
    discount,
    description,
    from,
    to
  }

  return (
    <div className="content">
     <Form>
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
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
          <Form.Label>From</Form.Label>
          <input name="From" value={from} type="text" placeholder="Name" onChange={(e)=>setFrom(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Label>To</Form.Label>
          <input type="text" value={to} onChange={(e)=>setTo(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Label>Discount</Form.Label>
          <input type="text" value={discount} onChange={(e)=>setDiscount(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Label>Description</Form.Label>
          <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </Form.Group>
        <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Price from</Form.Label>
                    <Form.Control name="priceFrom"  type="number" placeholder="Price from" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Price to</Form.Label>
                    <Form.Control name="priceTo"  type="number" placeholder="Price to" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Country from</Form.Label>
                <Form.Select name="countryFrom" defaultValue="Choose country from...">
                        <option>Choose...</option>
                        {countries.map((country) => <option>{country}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Country to</Form.Label>
                    <Form.Select name="countryTo" defaultValue="Choose country to...">
                        <option>Choose...</option>
                        {countries.map((country) => <option>{country}</option>)}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check name="pets" type="checkbox" label="Pets" />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check name="breakfast" type="switch" label="Breakfast" />
            </Form.Group>
        <Link to='/tours'><Button
          variant="primary"
          onClick={() => {
            dispatch(TourEdit(newTour));
          }}
        >
          UPDATE
        </Button></Link>
      </Form>
    </div>
  );
}
export default EditTour;
