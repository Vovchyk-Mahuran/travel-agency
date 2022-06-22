import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import '../assets/styles/TourDetails.scss';
import { Tour } from '../interfaces/ToursInterfaces/Tour'
import moment from 'moment';

function TourDetails() {
  const location = useParams();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const selectedTour: any | Tour | undefined = tours.find((tour:Tour) => tour.id === location.id);

  if (!selectedTour) return null;// for checking if it exists

 
  return (
    <div className="content">
        <div className="tour-details d-flex gap-5">
          <img  className="tour-details__photo" src={selectedTour.photo} alt={selectedTour.name} />
          <div>
            <h2>{selectedTour.name}</h2>
            <span className="tour-details__price">{selectedTour.price}$</span>
            <div>{selectedTour.description}</div>
            <div>
              Pets:
              <input type="checkbox" checked={selectedTour.pets} disabled/>
            </div>
          </div>
      </div>
      <div>Tour created at {moment(selectedTour.createdAt.toLocaleString()).format("DD MM YYYY hh:mm:ss")}</div>
      </div>
  );
}
export default TourDetails;
