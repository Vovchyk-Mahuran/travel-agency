import React from 'react';

import PhotoCircle from './PhotoCircle';
import play from '../assets/img/btn-play.svg';
import videoOne from '../assets/img/video-1.png';
import videoTwo from '../assets/img/video-2.png';
import videoThree from '../assets/img/video-3.png';

function Surprises() {
  const videos = [
    {
      src: videoOne,
      title: 'vid',
    },
    {
      src: videoTwo,
      title: 'vid',
    },
    {
      src: videoThree,
      title: 'vid',
    },
  ];
  return (
    <div className="surprises">
      <div className="surprises__text">
        <h2 className="section-title surprises__title">Resort Surprises</h2>
        <p className="surprises__description">Lorem ipsum zdolor sit amet, consectetur adipiscing elit.</p>
        <ul className="surprises__list list">
          <div className="list__item">
            <div className="list__photo pool" />
            <span className="list__name">Infinity Pool</span>
          </div>
          <div className="list__item">
            <div className="list__photo beach" />
            <span className="list__name">The beach</span>
          </div>
          <div className="list__item">
            <div className="list__photo surprise" />
            <span className="list__name">Beach Surprise</span>
          </div>
          <div className="list__item">
            <div className="list__photo activities" />
            <span className="list__name">Beach Activities</span>
          </div>
        </ul>
      </div>
      <div className="surprises__videos">
        <div className="main-video">
          <img src={play} alt="play" />
        </div>
        <div className="available-videos">
          {videos.map((video) => <PhotoCircle src={video.src} title={video.title} />)}
        </div>
        <span className="video-tip">Play your favourite</span>
      </div>
    </div>
  );
}
export default Surprises;
