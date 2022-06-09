import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Registration from './Registration';
import { onLogOut } from '../reducers/usersReducer';
import { User } from '../interfaces/UsersInterfaces/User';
import { RootState } from '../store/store';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [modalShow, setModalShow] = useState(false);// регистрация

  const isAuth: boolean = useSelector((state: RootState) => state.user.isAuth);
  const isAdmin: boolean = useSelector((state: RootState) => state.user.isAdmin);
  const user: User | undefined = useSelector((state: RootState) => state.user.user);
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
              {isAdmin ? <Link to='/admin'>{user.name}</Link>:user.name}
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
      <button type="button" className="menu" onClick={() => setMenuActive(!menuActive)}>
        <span className="menu__span" />
        <span className="menu__span" />
        <span className="menu__span" />
      </button>
      <div className={menuActive ? 'menu-list active list' : 'menu-list list'}>
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
