import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function TourDetails({ tours }) {
  const location = useParams();
  const selectedTour = tours.find((tour) => tour.id === location.id);
  console.log(selectedTour);
  console.log(tours);
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
              {selectedTour?.exstras?.map((extra) => <div>{extra}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TourDetails;
