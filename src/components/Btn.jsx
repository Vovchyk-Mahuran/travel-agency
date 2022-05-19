import React from 'react';

function Btn({
  title,
  btnClassName,
  bg,
}) {
  return (
    <div>
      <button type="button" className={`${btnClassName}`} style={{ backgroundColor: bg }}>{title}</button>
    </div>
  );
}
export default Btn;
