import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { onLogin } from '../reducers/usersReducer';

function Login() {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email,
    password,
  };
  const onSubmit = () => dispatch(onLogin(user));

  return (
    <div className="m-5">
      <div className="text-center mb-3">LOGIN</div>
      {/* {isAuth && onSuccess()} */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
          <Form.Label>Enter your email</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
            })}
            type="email"
            placeholder="ivanov@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email?.type === 'required' && 'Email is required'}
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', {
              required: true,
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            })}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password?.type === 'required' && 'password is required'}
          {errors.password?.message}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>

  );
}
export default Login;
