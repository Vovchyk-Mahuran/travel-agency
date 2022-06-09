import React from 'react';
import { BtnProps } from '../interfaces/PropsInterfaces/BtnProps';

function Btn({
  title, btnClassName, 
}: BtnProps) {
  return (
    <div>
      <button type="button" className={btnClassName} >{title}</button>
    </div>
  );
}
export default Btn;
