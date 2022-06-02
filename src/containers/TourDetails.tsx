import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import { RootState } from '../store/store';
import { Tour } from '../interfaces/ToursInterfaces/Tour'

function TourDetails() {
  const location = useParams();
  const tours = useSelector((state: RootState) => state.tour.tours);
  const selectedTour: Tour | undefined = tours.find((tour:Tour) => tour.id === location.id);

  if (!selectedTour) return null;// for checking nalichie

  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className="tour-detailid d-flex gap-5">
          <img style={{ width: 500 }} src={selectedTour.photo} alt={selectedTour.name} />
          <div>
            <div>{selectedTour.name}</div>
            <div>{selectedTour.price}</div>
            <div>{selectedTour.description}</div>
            <div>
              Pets:
              <input type="checkbox" checked={selectedTour.pets} />
            </div>
            <div>
              {selectedTour?.exstras?.map((extra:string) => <div key=''>{extra}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TourDetails;
