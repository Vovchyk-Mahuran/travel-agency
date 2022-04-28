import time from './assets/img/time.svg';
import recommendationOne from './assets/img/circle-1.png';
import recommendationTwo from './assets/img/circle-2.png';
import recommendationThree from './assets/img/circle-3.png';
import arrowDown from './assets/img/arrowDown.svg';
import play from './assets/img/btn-play.svg';
import videoOne from './assets/img/video-1.png';
import videoTwo from './assets/img/video-2.png';
import videoThree from './assets/img/video-3.png';
import sajidOne from './assets/img/sajid-1.png';
import sajidTwo from './assets/img/sajid-2.png';
import sajidThree from './assets/img/sajid-3.png';
import like from './assets/img/like.svg';
import './assets/styles/App.scss';
import './assets/styles/reset.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <header className='header'>
          <span className='logo'>SajidStudio</span>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Type of house</a></li>
            <li><a href='/'>Contact</a></li>
            <button className='login'>Login</button>
          </ul>
          <div className='menu'>
            <span className='menu-span'></span>
            <span className='menu-span'></span>
            <span className='menu-span'></span>
          </div>
          <div className='menu-list'>
            <nav>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Type of house</a></li>
            <li><a href='/'>Contact</a></li>
          <button className='login'>Login</button>
            </nav>
          </div>
        </header>
        <section className='banner'>
          <div className='overlay'>
            <div className='banner-txt'>
              <h1>Enjoy Your Dream Vacation</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </section>
        <section className='facilities'>
          <div className='facilities-column column'>
            <div className='facilities-header'>
              <span className='section-title title'>Facilities</span>
              <a href='/'>See More</a>
            </div>
            <div className='cards'>
              <div className='cards-item'>
                <a href='/' className='card-photo swimming'></a>
                <a href='/' className='card-title'>Swimming</a>
              </div>
              <div className='cards-item'>
                <a href='/' className='card-photo wifi'></a>
                <a href='/' className='card-title'>Wi-fi</a>
              </div>
              <div className='cards-item'>
                <a href='/' className='card-photo ac'></a>
                <a href='/' className='card-title'>AC</a>
              </div>
              <div className='cards-item'>
                <a href='/' className='card-photo dinner'></a>
                <a href='/' className='card-title'>Dinner</a>
              </div>
            </div>
          </div>
          <div className='facilities-second-column'>
          <div className='tour-details'>
              <span className='tour-details-title section-subtitle'>Hotels for You</span>
              <span className='duration'>5 days 6 nights</span>
              <span className='price'><img src={ time } alt='time'/>$4000</span>
          </div>
          <div className='recommendations'>
              <input className='search' type='text' placeholder='Search.....' />
              <div className='recommendations-photos'>
                <img src={recommendationOne} alt="1" />
                <img src={recommendationTwo} alt="2" />
                <img src={recommendationThree} alt="3" />
              </div>
            </div>
            </div>
        </section>
        <section className='destination'>
          <h2 className='section-title destination-title'>Entire city of choice</h2>
          <div className='resorts'>
            <div className="resort">
              <div className="resort-img resort-img-1"></div>
              <div className="resort-body">
                <div className='resort-body-text'>
                  <span className='resort-price'>$600.00</span>
                  <span className='resort-id'>Booking ID: 9837432</span>
                  <span className='resort-title'>Turkey resort</span>
                </div>
                <div className='resort-body-status'>
                </div>
              </div>
            </div>
            <div className="resort">
              <div className="resort-img resort-img-2"></div>
              <div className="resort-body">
                <div className='resort-body-text'>
                  <span className='resort-price'>$600.00</span>
                  <span className='resort-id'>Booking ID: 9837432</span>
                  <span className='resort-title'>Turkey resort</span>
                </div>
                <div className='resort-body-status'>
                </div>
              </div>
            </div>
            <div className="resort">
              <div className="resort-img resort-img-3"></div>
              <div className="resort-body">
                <div className='resort-body-text'>
                  <span className='resort-price'>$600.00</span>
                  <span className='resort-id'>Booking ID: 9837432</span>
                  <span className='resort-title'>Turkey resort</span>
                </div>
                <div className='resort-body-status'>
                </div>
              </div>
            </div>         
          </div>
          <div className='bg-blue'>
            <img className='arrow-down' src={arrowDown} alt='arrowDown'/>
          </div>
        </section>
        <section className='conditions'>
          <div className='surprises'>
            <div className='surprises-text'>
              <h2 className='section-title surprises-title'>Resort Surprises</h2>
              <p className='surprises-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className='surprises-list'>
                <div className='surprises-list-item'>
                  <div className='surprises-list-photo pool'></div>
                  <span className='surprises-list-name'>Infinity Pool</span>
                </div>
                <div className='surprises-list-item'>
                  <div className='surprises-list-photo beach'></div>
                  <span className='surprises-list-name'>The beach</span>
                </div>
                <div className='surprises-list-item'>
                  <div className='surprises-list-photo surprise'></div>
                  <span className='surprises-list-name'>Beach Surprise</span>
                </div>
                <div className='surprises-list-item'>
                  <div className='surprises-list-photo activities'></div>
                  <span className='surprises-list-name'>Beach Activities</span>
                </div>
              </ul>
            </div>
            <div className='surprises-videos'>
              <div className='main-video'>
                <img src={play} alt="play"/>
              </div>
              <div className='available-videos'>
                <a href='/'><img src={videoOne} alt='video-1'/></a>
                <a href='/'><img className='video-active' src={videoTwo} alt='video-2'/></a>
                <a href='/'><img src={videoThree} alt='video-3'/></a>
              </div>
              <span className='video-tip'>Play your favourite</span>
            </div>
          </div>
          <div className='sajid-resort'>
            <div className='sajid-resort-images'>
              <img src={sajidOne} alt="Sajid resort" />
              <div className='active-img'>
                <img src={sajidTwo} alt="Sajid resort" />
                <div className='modal-window'>
                  <div className='modal-window-header'>
                    <span className='modal-window-title'>Sajid Resort</span>
                    <div className='rating'>
                      <img className='like' src={like} alt='like'/>
                      <span className='rating-value'>4.3</span>
                    </div>
                  </div>
                  <button className='booking-btn'>Book now</button>
                </div>
              </div>
              <img src={sajidThree} alt="Sajid resort"/>
            </div>
            <div className='sajid-resort-text'>
              <p className='greeting'>Weclome to Sajid Studio resort</p>
              <h2 className='sajid-resort-title'>Relaxing Pleasure</h2>
              <p className='sajid-resort-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Consectetur semper vitae integer eget velit lobortis.Maecenas ultrices nunc lobortis ac vivamus neque, eget.
                Placerat auctor enim nisl amet, in sem at. Elementum nec consequat vulputate nibh nisl ultrices diam sapien,
                nibh. Odio faucibus semper nibh vulputate condimentum.</p>
            </div>
          </div>
        </section>
      </div>
      <section className='section-airlines'>
        <div className='content'>
          <div className='airlines'>
            <h3 className='section-subtitle'>Search for other Top Airlines</h3>
            <div className='airlines-columns'>
              <ul className='airlines-column'>
                <div className='airlines-item'>
                  <div className='airline-photo biman'></div>
                  <span className='airline'>Biman BD Airline</span>
                </div>
                <div className='airlines-item'>
                  <div className='airline-photo badal'></div>
                  <span className='airline'>Badal Airline</span>
                </div>
                <div className='airlines-item'>
                  <div className='airline-photo raza'></div>
                  <span className='airline'>Raza Airline</span>
                </div>
              </ul>
              <ul className='airlines-column'>
                <div className='airlines-item'>
                  <div className='airline-photo hello-int'></div>
                  <span className='airline'>Hello Int. Airlines</span>
                </div>
                <div className='airlines-item'>
                  <div className='airline-photo pakistan'></div>
                  <span className='airline'>Pakistan International Airlines</span>
                </div>
                <div className='airlines-item'>
                  <div className='airline-photo hello-international'></div>
                  <span className='airline'>Hello International Airlines</span>
                </div>
              </ul>
              <div className='tourist'></div>
            </div>
          </div>
        </div>
      </section>
      <section className='form'>
        <h2 className='form-title'>Get better work</h2>
        <p className='form-description'>See why million of
          people accross 195 uses Desh dot</p>
        <div className='subscribe'>
          <input className='email-input' type='email' placeholder='artalisajid@gmail.com' />
          <button className='try-free'>Try Free</button>
        </div>
      </section>
      <footer className='footer'>
        <div className='footer-body'>
          <ul className='footer-column'>
            <span className='footer-column-title'>Sajid Studio</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ul>
          <ul className='footer-column'>
            <span className='footer-column-title'>Links</span>
            <li className='footer-item'><a href='/'>Home</a></li>
            <li className='footer-item'><a href='/'>Prior</a></li>
            <li className='footer-item'><a href='/'>Download</a></li>
            <li className='footer-item'><a href='/'>About</a></li>
            <li className='footer-item'><a href='/'>Service</a></li>
          </ul>
          <ul className='footer-column support'>
            <span className='footer-column-title'>Support</span>
            <li className='footer-item'><a href='/'>FAQ</a></li>
            <li className='footer-item'><a href='/'>How it</a></li>
            <li className='footer-item'><a href='/'>Features</a></li>
            <li className='footer-item'><a href='/'>Contacts</a></li>
            <li className='footer-item'><a href='/'>Reporting</a></li>
          </ul>
          <ul className='footer-column contacts'>
            <span className='footer-column-title'>Contact Us</span>
            <li className='footer-item'><a href='tel:+923431279488'>+923431279488</a></li>
            <li className='footer-item'><a href='mailto:artalisajid@gmail.com'>artalisajid@gmail.com</a></li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <div className='content footer-bottom-content'>
            <a className='footer-bottom-left' href='/'>Copyright &amp; Design by Sajid</a>
            <div className='footer-bottom-right'>
              <a href='/'>Terms of use</a>
              <a href='/'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
