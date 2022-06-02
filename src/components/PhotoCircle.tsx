import React from 'react';

export interface PhotoCircleProps {
  src: string,
  title:string,
}
function PhotoCircle({ src, title }:PhotoCircleProps) {
  return (
    <img style={{ borderRadius: '50%' }} src={src} alt={title} />
  );
}
export default PhotoCircle;
