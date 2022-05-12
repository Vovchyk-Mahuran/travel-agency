import { Link } from 'react-router-dom';
import { useState } from 'react';
import Registration from './Registration';

function Header({ user, users, setUsers,nameChange,surnameChange,emailChange,passwordChange,onLogin,onRegister,onSuccess,onError,isAuth,onLogOut }) {
  // console.log(users);
  const [modalShow, setModalShow] = useState(false);// регистрация
  // const authUser = users.find((u) => user.email === u.email);
  // console.log(user);
  // setUser(authUser);
    return (
        <header className='header'>
          <span className='header__logo'>SajidStudio</span>
          <nav>
            <ul className='header__list list'>
              <li className='list__item'><Link to='/' className='list__link'>Home</Link></li>
              <li className='list__item'><Link to='/tours' className='list__link'>Tours</Link></li>
              <li className='list__item'><Link to='/type' className='list__link'>Type of house</Link></li>
              <li className='list__item'><Link to='/contact' className='list__link'>Contact</Link></li>
              {isAuth && user?<div>{user.name} <button className='header__login' onClick={()=>onLogOut()}>Log Out</button></div>:<div><button className='header__login' onClick={() => setModalShow(true)}>Login</button> 
              <Registration
                user={user}
                users={users}
                setUsers={setUsers}
                show={modalShow}
                onHide={() => setModalShow(false)}
                nameChange={nameChange}
                surnameChange={surnameChange}
                emailChange={emailChange}
                passwordChange={passwordChange}
                onSuccess={onSuccess}
                onError={onError}
                onRegister={onRegister}
                onLogin={onLogin}
                isAuth={isAuth}
              /></div>}
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
                    <li className='list__item'><Link to='/tours' className='list__link'>Tours</Link></li>
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