import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../assets/styles/Tours.scss';

import { AddTour } from '../reducers/tourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import { RootState } from '../store/store';
import Search from '../components/Search';
import Loading from '../components/Loading';

function Tours() {
  const dispatch = useDispatch();
  const tours: Array<Tour> = useSelector((state: RootState) => state.tour.tours);
  // if(!tours.length) return <Loading/>

  return (
    <div className="content">
      <div className="tours row justify-content-around">
        <Search />
            {tours.length ? tours.map((tour: Tour) => (
              <Card key={tour.id} className="tours__tour tour">
                <Card.Img className="tour__img" variant="top" src={tour.photo} />
                <Card.Body className="tour__body d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="tour__title">{tour.name}</Card.Title>
                    <Card.Text className="tour__price">
                      {tour.price}
                      $
                    </Card.Text>
                  </div>
                  <div className="tour__buttons">
                    <Button className="tour__button" variant="variant"><Link to={`/tours/${tour.id}`}>OPEN DETAILS</Link></Button>
                    {/* <Button variant="danger" onClick={() => dispatch(onDeleteTour(tour.id))}>DELETE</Button> */}
                  </div>
                </Card.Body>
                {tour?.discount>0 && <span className="tour__discount">-{tour.discount}%</span>}
              </Card>
            )): <Loading/>}
      </div>
    </div>
  );
}
export default Tours;
