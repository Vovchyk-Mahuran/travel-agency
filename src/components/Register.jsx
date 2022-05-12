import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { usersData } from '../mock/users';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';

function Register({ nameChange, surnameChange, emailChange, passwordChange, onRegister, users, setUsers }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    // const [users, setUsers] = useState([]);
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isRegistered, setIsRegistered] = useState(false);

    // useEffect(() => {
    //     setUsers(usersData);
    // },[])
    // // const nameChange = (v) => {
    //     const newName = v.target.value;
    //     setName(newName);
    //    // console.log(newName);
    // }
    // const surnameChange = (v) => {
    //     const newSurname = v.target.value;
    //     setSurname(newSurname);
    //    // console.log(newSurname);
    // }
    // const emailChange = (v) => {
    //     const newEmail = v.target.value;
    //     setEmail(newEmail);
    //    // console.log(newEmail);
    // }
    // const passwordChange = (v) => {
    //     const newPassword = v.target.value;
    //     setPassword(newPassword);
    //     //console.log(newPassword);
    // }
    // const onRegister = () => {
    //     const newUser = {
    //         name,
    //         surname,
    //         email,
    //         password,
    //     }
    //     if (users.find((user) => user.email === email)) {
    //         alert("This email is registered");
    //     } else {
    //         alert('Account was successfully created')
    //         const newUsers = users.push(newUser); 
    //         setIsRegistered(true);
    //         setUsers(newUsers);
    //         console.log(newUsers);// виводить цифру???????
    //     }
        // console.log(newUser);
        // const newUsers = [...users, newUser];
        // console.log(newUsers)
        // setUsers(newUsers);
    //}
    return (
       <div className='m-5'>
            <div className='text-center mb-3'>CREATE AN ACCOUNT</div>
            {/* {!isRegistered && users.find((user) => email !== user.email) && <Alert variant='success'>success</Alert>} */}
                 {/* : <Alert variant='danger'> wrong </Alert> */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Ivan" required onChange={(e)=>nameChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                    <Form.Label>Enter your surname</Form.Label>
                    <Form.Control type="text" placeholder='Ivanov' required onChange={(e)=>surnameChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="ivanov@gmail.com" required onChange={(e) => emailChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        Enter valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" required minLength={4} maxLength={8} onChange={(e) => passwordChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        Password must be from 4 to 8 symbols.
                    </Form.Control.Feedback>
                </Form.Group> 
                <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control required minLength={4} maxLength={8} type="password" />
                    <Form.Control.Feedback type="invalid">
                        Password must be from 4 to 8 symbols.
                    </Form.Control.Feedback>
                </Form.Group> 
                <Button variant="primary" type='button'onClick={() => onRegister()}>
                    Create
                </Button>
            </Form>
        </div>
    )
}
export default Register;