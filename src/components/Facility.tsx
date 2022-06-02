import React from 'react';

interface FacilityProps {
  facilityClassName: string,
  title: string,
}
function Facility({
  facilityClassName,
  title,
}:FacilityProps) {
  return (
    <a href="/" className="cards__item">
      <div className={`cards__photo ${facilityClassName}`} />
      <p className="cards__title">{title}</p>
    </a>
  );
}
export default Facility;
