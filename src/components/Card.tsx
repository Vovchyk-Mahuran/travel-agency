import React from 'react';
import { CardType } from '../interfaces/TypesInterfaces/CardType';

function Card({
  cardClassName, price, ID, title,
}: CardType) {
  return (
    <div className="resort">
      <div className={`resort__img ${cardClassName}`} />
      <div className="resort__body">
        <div className="resort__text">
          <span className="resort__price">{price}</span>
          <span className="resort__id">{ID}</span>
          <span className="resort__title">{title}</span>
        </div>
        <div className="resort__status" />
      </div>
    </div>
  );
}
export default Card;
