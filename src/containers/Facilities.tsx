import React from 'react';
import Facility from '../components/Facility';
import PhotoCircle from '../components/PhotoCircle';

import time from '../assets/img/time.svg';
import recommendationOne from '../assets/img/circle-1.png';
import recommendationTwo from '../assets/img/circle-2.png';
import recommendationThree from '../assets/img/circle-3.png';
import { FacilityType } from '../interfaces/TypesInterfaces/FacilityType';
import { RecommendationsPhoto } from '../interfaces/TypesInterfaces/RecommendationsPhoto';


function Facilities() {
  const facilitiesData: Array<FacilityType> = [
    {
      facilityClassName: 'swimming',
      title: 'Swimming',
    },
    {
      facilityClassName: 'wifi',
      title: 'Wi-fi',
    },
    {
      facilityClassName: 'ac',
      title: 'AC',
    },
    {
      facilityClassName: 'dinner',
      title: 'Dinner',
    },
  ];
  const recommendPhotos:Array<RecommendationsPhoto> = [
    {
      src: recommendationOne,
      title: 'ph',
    },
    {
      src: recommendationTwo,
      title: 'ph',
    },
    {
      src: recommendationThree,
      title: 'ph',
    },
  ];
  return (
    <section className="facilities">
      <div className="facilities__column column">
        <div className="facilities__header">
          <span className="section-title facilities__title">Facilities</span>
          <a href="/" className="see-more">See More</a>
        </div>
        <div className="cards">
          {facilitiesData.map((facility) => (
            <Facility
              key=''
              facilityClassName={facility.facilityClassName}
              title={facility.title}
            />
          ))}
        </div>
      </div>
      <div className="facilities__second-column">
        <div className="tour-details">
          <span className="tour-details__title section-subtitle">Hotels for You</span>
          <span className="tour-details__duration">5 days 6 nights</span>
          <span className="tour-details__price">
            <img src={time} alt="time" />
            $4000
          </span>
        </div>
        <div className="recommendations">
          <input className="recommendations__search" type="text" placeholder="Search....." />
          <div className="recommendations__photos">
            {recommendPhotos.map((photo) => <PhotoCircle className="recommendations__photo" key='' src={photo.src} title={photo.title} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Facilities;
