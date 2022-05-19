import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Registration from './Registration';
import { onLogOut } from '../reducers/usersReducer';

function Header() {
  const [modalShow, setModalShow] = useState(false);// регистрация

  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <span className="header__logo">SajidStudio</span>
      <nav>
        <ul className="header__list list">
          <li className="list__item"><Link to="/" className="list__link">Home</Link></li>
          <li className="list__item"><Link to="/tours" className="list__link">Tours</Link></li>
          <li className="list__item"><Link to="/type" className="list__link">Type of house</Link></li>
          <li className="list__item"><Link to="/contact" className="list__link">Contact</Link></li>
          {isAuth && user ? (
            <div>
              {user.name}
              <button type="button" className="m-3 header__login" onClick={() => dispatch(onLogOut())}>Log Out</button>
            </div>
          ) : (
            <div>
              <button type="button" className="header__login" onClick={() => setModalShow(true)}>Login</button>
              <Registration
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          )}
        </ul>
      </nav>
      <div className="menu">
        <span className="menu__span" />
        <span className="menu__span" />
        <span className="menu__span" />
      </div>
      <div className="menu-list list">
        <nav>
          <ul>
            <li className="list__item"><Link to="/" className="list__link">Home</Link></li>
            <li className="list__item"><Link to="/tours" className="list__link">Tours</Link></li>
            <li className="list__item"><Link to="/type" className="list__link">Type of house</Link></li>
            <li className="list__item"><Link to="/contact" className="list__link">Contact</Link></li>
            <Link to="/login"><button type="button" className="header__login">Login</button></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
