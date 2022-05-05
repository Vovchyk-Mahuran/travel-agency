function Footer() {
    return (
        <footer className='footer'>
          <div className='footer__body'>
            <ul className='footer__column column'>
              <span className='column__title'>Sajid Studio</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </ul>
            <ul className='footer__column column'>
              <span className='column__title'>Links</span>
              <li className='column__item'><a href='/'>Home</a></li>
              <li className='column__item'><a href='/'>Prior</a></li>
              <li className='column__item'><a href='/'>Download</a></li>
              <li className='column__item'><a href='/'>About</a></li>
              <li className='column__item'><a href='/'>Service</a></li>
            </ul>
            <ul className='footer__column column support'>
              <span className='column__title'>Support</span>
              <li className='column__item'><a href='/'>FAQ</a></li>
              <li className='column__item'><a href='/'>How it</a></li>
              <li className='column__item'><a href='/'>Features</a></li>
              <li className='column__item'><a href='/'>Contacts</a></li>
              <li className='column__item'><a href='/'>Reporting</a></li>
            </ul>
            <ul className='footer__column column contacts'>
              <span className='column__title'>Contact Us</span>
              <li className='column__item'><a href='tel:+923431279488'>+923431279488</a></li>
              <li className='column__item'><a href='mailto:artalisajid@gmail.com'>artalisajid@gmail.com</a></li>
            </ul>
          </div>
          <div className='footer__bottom'>
            <div className='content footer__content'>
              <a className='footer__bottom_left' href='/'>Copyright &amp; Design by Sajid</a>
              <div className='footer__bottom_right'>
                <a href='/'>Terms of use</a>
                <a href='/'>Privacy Policy</a>
              </div>
            </div>
          </div>
      </footer>
    )
}
export default Footer;