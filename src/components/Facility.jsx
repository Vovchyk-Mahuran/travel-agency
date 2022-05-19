import React from 'react';

function Facility({
  facilityClassName,
  title,
}) {
  return (
    <a href="/" className="cards__item">
      <div className={`cards__photo ${facilityClassName}`} />
      <p className="cards__title">{title}</p>
    </a>
  );
}
export default Facility;
