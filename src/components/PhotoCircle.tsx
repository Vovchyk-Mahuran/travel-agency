import React from 'react';
import {PhotoCircleProps} from '../interfaces/PropsInterfaces/PhotoCircleProps';

function PhotoCircle({ src, title, className }:PhotoCircleProps) {
  return (
    <img className={className} src={src} alt={title} />
  );
}
export default PhotoCircle;
