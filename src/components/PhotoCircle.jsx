import React from 'react';

function PhotoCircle({
  src,
  title,
}) {
  return (
    <img style={{ borderRadius: '50%' }} src={src} alt={title} />
  );
}
export default PhotoCircle;
