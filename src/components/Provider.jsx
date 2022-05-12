import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Header from './Header';
import Tours from './Tours';
import TourDetails from './TourDetails';
import {data} from '../mock/tours'
import { useEffect, useState } from 'react';
import { usersData } from "../mock/users";
import { Alert } from "react-bootstrap";

function Provider() {
    const [tours, setTours] = useState([]);//самий популярний хук 
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  //       setUsers(usersData);
  // }, [])
  
  const nameChange = (v) => {
        const newName = v.target.value;
        setName(newName);
       // console.log(newName);
    }
  const surnameChange = (v) => {
        const newSurname = v.target.value;
        setSurname(newSurname);
       // console.log(newSurname);
    }
  const emailChange = (v) => {
        const newEmail = v.target.value;
        setEmail(newEmail);
       // console.log(newEmail);
    }
  const passwordChange = (v) => {
        const newPassword = v.target.value;
        setPassword(newPassword);
        //console.log(newPassword);
  }
  
  const onSuccess = () => {
    if (users.find((user) => user.email === email)) {
      return (<Alert variant='success'>success</Alert>)
    }
}
  const onError = () => {
   return(<Alert variant='danger'>error</Alert>)
 }

  const onRegister = () => {
    const newUser = {
      name,
      surname,
      email,
      password,
    }
    if (users.find((user) => user.email === email)) {
      alert("This email is registered");
    } else {
      alert('Account was successfully created')
      users.push(newUser);
      setUsers(users);
      console.log(users);// виводить цифру???????
    }
  }
  const onLogin = () => {
      console.log(users);
      const user = users.find((user) => user.email === email && user.password === password);
      console.log(user);
      if (user) {
        //  alert('authorized');
          setIsAuth(true);
          setUser(user);
        console.log(isAuth);
      } else {
        alert('Wrong email or password');
      }
    }
  const onLogOut = () => {
    console.log(isAuth);
    setIsAuth(!isAuth);
}
    useEffect(() => {// при першій загрузці сайту
     //to API 
        setTours(data);
        setUsers(usersData);
        setUser('')
    }, []);
    const onDeleteHandler = (id) => {
        const filteredTours = tours.filter((tour) => tour.id !== id);
        setTours(filteredTours)
    }
    const onAddHandler = (tour) => {
        const newTours = [...tours, tour];// new element in array
        console.log(newTours);
        setTours(newTours);
    };
    return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<App
            user={user}
            setUser={setUser}
            users={users}
            setUsers={setUsers}
            nameChange={nameChange}
            surnameChange={surnameChange}
            emailChange={emailChange}
            passwordChange={passwordChange}
            onSuccess={onSuccess}
            onError={onError}
            onRegister={onRegister}
            onLogin={onLogin}
            isAuth={isAuth}
            onLogOut={onLogOut} />} />
        <Route index path='/tours' element={
          <Tours tours={tours}
            onDeleteHandler={onDeleteHandler}
            onAddHandler={onAddHandler}
            isAuth={isAuth}
              user={user}
               onRegister={onRegister}
              onLogin={onLogin}
            onLogOut={onLogOut}/>
            } />
        <Route index path='/tours/:id' element={<div className='content'><Header />
            <TourDetails tours={tours}/>
        </div>} />
        <Route index path='/type' element={<div>2</div>} />
        <Route index path='/contact' element={<div>3</div>} />
      </Routes>
    </BrowserRouter>
    )
}
export default Provider;