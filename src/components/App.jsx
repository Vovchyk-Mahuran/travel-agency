import '../assets/styles/App.scss';
import '../assets/styles/reset.css';

import '../assets/styles/header.scss';
import '../assets/styles/banner.scss';
import '../assets/styles/facilities.scss';
import '../assets/styles/destination.scss';
import '../assets/styles/surprises.scss';
import'../assets/styles/sajid-resort.scss';
import '../assets/styles/section-airlines.scss';
import '../assets/styles/form.scss';
import '../assets/styles/footer.scss';
import '../assets/styles/menu.scss';

import Header from './Header';
import Banner from './Banner';
import Facilities from './Facilities';
import Destination from './Destination';
import Surprises from './Surprises';
import SajidResort from './SajidResort';
import SectionAirlines from './SectionAirlines';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header/>
        <Banner/>
        <Facilities />
        <Destination/>
        <section className='conditions'>
          <Surprises/>
          <SajidResort/>
        </section>
      </div>
      <SectionAirlines/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;