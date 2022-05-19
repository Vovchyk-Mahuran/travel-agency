import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { onRegister } from '../reducers/usersReducer';

function Register() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const newUser = {
    id: users.length + 1,
    name,
    surname,
    email,
    password,
  };

  const onSubmit = () => dispatch(onRegister(newUser));

  return (
    <div className="m-5">
      <div className="text-center mb-3">CREATE AN ACCOUNT</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex flex-column " controlId="formBasicEmail">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', {
              required: true,
              minLength: {
                value: 3,
                message: 'Min length is 3 characters',
              },
            })}
            type="text"
            placeholder="Ivan"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name?.type === 'required' && 'name is required'}
          {errors.name?.message}
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
          <Form.Label>Enter your surname</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('surname', {
              required: true,
              minLength: {
                value: 4,
                message: 'Min length is 4 characters',
              },
            })}
            type="text"
            placeholder="Ivanov"
            onChange={(e) => setSurname(e.target.value)}
          />
          {errors.surname?.type === 'required' && 'surname is required'}
          {errors.surname?.message}
        </Form.Group>
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
          {errors.email?.type === 'required' && 'Enter valid email'}
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
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('repassword', {
              required: true,
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            })}
            type="password"
            onChange={(e) => setRepassword(e.target.value)}
          />
          {errors.password?.type === 'required' && 'password is required'}
          {errors.password?.message}
          {password !== repassword && 'Passwords must be equal'}
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
export default Register;
