import React from 'react';

import sajidOne from '../assets/img/sajid-1.png';
import sajidTwo from '../assets/img/sajid-2.png';
import sajidThree from '../assets/img/sajid-3.png';
import like from '../assets/img/like.svg';

function SajidResort() {
  return (
    <div className="sajid-resort">
      <div className="sajid-resort__images">
        <img src={sajidOne} alt="Sajid resort" />
        <div className="active-img">
          <img src={sajidTwo} alt="Sajid resort" />
          <div className="modal-window">
            <div className="modal-window__header">
              <span className="modal-window__title">Sajid Resort</span>
              <div className="modal-window__rating">
                <img className="like" src={like} alt="like" />
                <span className="rating-value">4.3</span>
              </div>
            </div>
            <button type="button" className="booking-btn">Book now</button>
          </div>
        </div>
        <img src={sajidThree} alt="Sajid resort" />
      </div>
      <div className="sajid-resort__text">
        <p className="sajid-resort__greeting">Weclome to Sajid Studio resort</p>
        <h2 className="sajid-resort__title">Relaxing Pleasure</h2>
        <p className="sajid-resort__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Consectetur semper vitae integer eget velit lobortis.Maecenas
          ultrices nunc lobortis ac vivamus neque, eget.
          Placerat auctor enim nisl amet, in sem at. Elementum nec consequat
          vulputate nibh nisl ultrices diam sapien,
          nibh. Odio faucibus semper nibh vulputate condimentum.
        </p>
      </div>
    </div>
  );
}
export default SajidResort;
