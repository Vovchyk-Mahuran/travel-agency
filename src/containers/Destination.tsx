import React from 'react';
import Card from '../components/Card';
import arrowDown from '../assets/img/arrowDown.svg';
import { CardType } from '../interfaces/TypesInterfaces/CardType';


function Destination() {
  const cardData:Array<CardType> = [
    {
      cardClassName: 'resort__img-turkey-1',
      price: '$600.00',
      ID: 'Booking ID: 9837432',
      title: 'Turkey resort',
    },
    {
      cardClassName: 'resort__img-turkey-2',
      price: '$600.00',
      ID: 'Booking ID: 9837432',
      title: 'Turkey resort',
    },
    {
      cardClassName: 'resort__img-turkey-3',
      price: '$600.00',
      ID: 'Booking ID: 9837432',
      title: 'Turkey resort',
    },
  ];
  return (
    <section className="destination">
      <h2 className="section-title destination__title">Entire city of choice</h2>
      <div className="destination__resorts resorts">
        {cardData.map((card) => {
          const {
            cardClassName,
            price,
            ID,
            title,
          } = card;// Деструктуризація
          return (
            <Card
              key=''
              cardClassName={cardClassName}
              price={price}
              ID={ID}
              title={title}
            />
          );
        })}

      </div>
      <div className="bg-blue">
        <img className="arrow-down" src={arrowDown} alt="arrowDown" />
      </div>
    </section>
  );
}
export default Destination;
