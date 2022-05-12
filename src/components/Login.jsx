import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login({ isAuth,emailChange, passwordChange, onLogin,onSuccess,onError,users,setUsers}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
        <div className='m-5'>
            <div className='text-center mb-3'>LOGIN</div>
            {isAuth && onSuccess()}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="ivanov@gmail.com" required onChange={(e) => emailChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" required minLength={4} maxLength={8} onChange={(e) => passwordChange(e)} />
                    <Form.Control.Feedback type="invalid">
                        Password must be from 4 to 8 symbols.
                    </Form.Control.Feedback>
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>   
                <Button variant="primary" type='submit' onClick={() => onLogin()}>
                    Log in
                </Button>
            </Form>
        </div>
        
    )
}
export default Login;