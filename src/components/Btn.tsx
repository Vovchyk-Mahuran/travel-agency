import React from 'react';

interface BtnProps {
  title: string,
  btnClassName: string,
  bg:string,
}
function Btn({
  title, btnClassName, bg,
}: BtnProps) {
  return (
    <div>
      <button type="button" className={`${btnClassName}`} style={{ backgroundColor: bg }}>{title}</button>
    </div>
  );
}
export default Btn;
