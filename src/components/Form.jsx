import React from 'react';
import Btn from './Btn';

function Form() {
  return (
    <section className="form">
      <h2 className="form__title">Get better work</h2>
      <p className="form__description">
        See why million of
        people accross 195 uses Desh dot
      </p>
      <div className="form__subscribe subscribe">
        <input className="email-input" type="email" placeholder="artalisajid@gmail.com" />
        <Btn title="Try Free" bg="#273BF4" btnClassName="try-free" />
      </div>
    </section>
  );
}
export default Form;
