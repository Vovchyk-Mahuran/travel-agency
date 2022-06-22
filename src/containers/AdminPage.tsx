import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../assets/styles/Tours.scss';

import { AddTour, DeleteTour, sortByPrice } from '../reducers/tourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { RootState } from '../store/store';
import Loading from '../components/Loading';
import { Row, Col } from 'react-bootstrap';
import AddTourForm from '../components/AddTourForm';

function AdminPage() {
  const dispatch = useDispatch();
  const tours: Array<Tour> = useSelector((state: RootState) => state.tour.tours);
  const adminName: string = useSelector((state: any) => state.user.user.name);

  return (
    <div className="content">
      <div className="tours row justify-content-around">
          {/* <Search/> */}
            {tours.length ? tours.map((tour: Tour) => (
              <Card key={tour.id} className="tours__tour tour">
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
                    <Button variant="danger" onClick={() => {
                      dispatch(DeleteTour({ ...tour, adminName }))
                      console.log('Deleted by ', adminName);
                    }}>DELETE</Button>
                  </div>
                </Card.Body>
                {tour?.discount>0 && <span className="tour__discount">-{tour.discount}%</span>}
              </Card>
            )): <Loading/>}
            <div />
        <AddTourForm/>
      </div>
    </div>
  );
}
export default AdminPage;
