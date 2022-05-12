import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Register from './Register';
import { usersData } from '../mock/users';
import { useState,useEffect } from 'react';
import { Alert } from 'react-bootstrap';


function Registration(props) {
  //  const [users, setUsers] = useState([]);
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isAuth, setIsAuth] = useState(false);
//   // useEffect(() => {
//   //       setUsers(usersData);
//   // }, [])
  
//   const nameChange = (v) => {
//         const newName = v.target.value;
//         setName(newName);
//        // console.log(newName);
//     }
//   const surnameChange = (v) => {
//         const newSurname = v.target.value;
//         setSurname(newSurname);
//        // console.log(newSurname);
//     }
//   const emailChange = (v) => {
//         const newEmail = v.target.value;
//         setEmail(newEmail);
//        // console.log(newEmail);
//     }
//   const passwordChange = (v) => {
//         const newPassword = v.target.value;
//         setPassword(newPassword);
//         //console.log(newPassword);
//   }
  
//   const onSuccess = () => {
//     if (props.users.find((user) => user.email === email)) {
//       return (<Alert variant='success'>success</Alert>)
//     }
// }
//   const onError = () => {
//    return(<Alert variant='danger'>error</Alert>)
//  }

//   const onRegister = () => {
//     const newUser = {
//       name,
//       surname,
//       email,
//       password,
//     }
//     if (props.users.find((user) => user.email === email)) {
//       alert("This email is registered");
//     } else {
//       alert('Account was successfully created')
//       props.users.push(newUser);
//       props.setUsers(props.users);
//       console.log(props.users);// виводить цифру???????
//     }
//   }
//   const onLogin = () => {
//       console.log(props.users);
//       const user = props.users.find((user) => user.email === email && user.password === password);
//       console.log(user);
//       if (user) {
//         //  alert('authorized');
//         setIsAuth(true);
//         console.log(isAuth);
//       } else {
//         alert('Wrong email or password');
//       }
//     }

    return (
         <Modal
       {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3 justify-center">
            <Tab eventKey="Login" title="Login">
              <Login isAuth={props.isAuth}
                emailChange={props.emailChange}
                passwordChange={props.passwordChange}
                onLogin={props.onLogin}
                onSuccess={props.onSuccess}
                onError={props.onError}
                users={props.users}
                user={props.user}/>
            </Tab>
            <Tab eventKey="Registration" title="Registration">
              <Register nameChange={props.nameChange}
                surnameChange={props.surnameChange}
                emailChange={props.emailChange}
                passwordChange={props.passwordChange}
                onRegister={props.onRegister}
                users={props.users}
              />
            </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
export default Registration;