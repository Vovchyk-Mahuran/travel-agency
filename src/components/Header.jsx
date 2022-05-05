import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
          <span className='header__logo'>SajidStudio</span>
          <nav>
            <ul className='header__list list'>
              <li className='list__item'><Link to='/' className='list__link'>Home</Link></li>
              <li className='list__item'><Link to='/about' className='list__link'>About</Link></li>
              <li className='list__item'><Link to='/type' className='list__link'>Type of house</Link></li>
              <li className='list__item'><Link to='/contact' className='list__link'>Contact</Link></li>
              <Link to='/login'><button className='header__login'>Login</button></Link>
            </ul>
          </nav>
          <div className='menu'>
            <span className='menu__span'></span>
            <span className='menu__span'></span>
            <span className='menu__span'></span>
          </div>
          <div className='menu-list list'>
            <nav>
                <ul>
                    <li className='list__item'><Link to='/' className='list__link'>Home</Link></li>
                    <li className='list__item'><Link to='/about' className='list__link'>About</Link></li>
                    <li className='list__item'><Link to='/type' className='list__link'>Type of house</Link></li>
                    <li className='list__item'><Link to='/contact' className='list__link'>Contact</Link></li>
                    <Link to='/login'><button className='header__login'>Login</button></Link>
                </ul>
            </nav>
          </div>
        </header>
    )
}
export default Header;