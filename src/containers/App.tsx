import '../assets/styles/App.scss';
import '../assets/styles/reset.css';

import '../assets/styles/header.scss';
import '../assets/styles/banner.scss';
import '../assets/styles/facilities.scss';
import '../assets/styles/destination.scss';
import '../assets/styles/surprises.scss';
import '../assets/styles/sajid-resort.scss';
import '../assets/styles/section-airlines.scss';
import '../assets/styles/form.scss';
import '../assets/styles/footer.scss';
import '../assets/styles/menu.scss';

import React from 'react';
import Header from './Header';
import Banner from '../components/Banner';
import Facilities from './Facilities';
import Destination from './Destination';
import Surprises from '../components/Surprises';
import SajidResort from '../components/SajidResort';
import SectionAirlines from '../components/SectionAirlines';
import Form from '../components/Form';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Banner />
        <Facilities />
        <Destination />
        <section className="conditions">
          <Surprises />
          <SajidResort />
        </section>
      </div>
      <SectionAirlines />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
