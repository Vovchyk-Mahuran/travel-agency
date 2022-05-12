import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import '../assets/styles/Tours.scss';

function Tours({ tours, onDeleteHandler, onAddHandler,user,isAuth,onLogin,onRegister,onLogOut }) {
    const [ id, setId ] = useState('0');
    const [ name, setName ] = useState('');
    const [price, setPrice] = useState(0);
    const [photo, setPhoto] = useState('');
    
    const idChange = (v) => {
            const newId = v.target.value;
            setId(newId);
        // console.log(newName);
    }
    
    const nameChange = (v) => {
        const newName = v.target.value;
        setName(newName);
       // console.log(newName);
    }
    
    const priceChange = (v) => {
        const newPrice = v.target.value;
        setPrice(newPrice);
       // console.log(newName);
    }

    const imgChange = (v) => {
        const newImg = v.target.value;
        setPhoto(newImg);
       // console.log(newName);
    }

    const tour = {
        id,
        name,
        price,
        photo
    }
    // const onChangeHandler = (e) => {
    //     console.log(e);
    // };
    return (
    <div className="App">
        <div className='content'>
            <Header user={user} isAuth={isAuth} onLogin={onLogin} onRegister={onRegister} onLogOut={onLogOut} />
            <div className="tours row justify-content-around">
                {tours.map((tour) => {
                    return (
                        <Card className='tours__tour tour'>
                    <Card.Img className='tour__img' variant="top" src={tour.photo} style={{width:100+'%'}} />
                    <Card.Body className='tour__body'>
                        <Card.Title className='tour__title'>{tour.name}</Card.Title>
                        <Card.Text className='tour__price'>
                        {tour.price}$
                        </Card.Text>
                        <div className='tour__buttons'> 
                            <Button variant="variant"><Link to={`/tours/${tour.id}`}>OPEN DETAILS</Link></Button>
                            <Button variant="danger" onClick={() => onDeleteHandler(tour.id)}>DELETE</Button>
                        </div>
                    </Card.Body>
                    </Card> 
                    )
                })}
                <div></div>
                {isAuth && <Form className='tours__form'>
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <input value={id} type="text" placeholder="Enter id" onChange={(e) => idChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <input name='name' value={name} type="text" placeholder="Name" onChange={(e) => nameChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                        <Form.Label>Price</Form.Label>
                        <input type="number" label="Price" value={price} onChange={(e) => priceChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                        <Form.Label>Img src</Form.Label>
                        <input type="text" label="Img" value={photo} onChange={(e) => imgChange(e)} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => {
                        onAddHandler(tour);
                    }}>
                        Add new tour
                    </Button>
                </Form>}
            </div>
        </div>
    </div>
               
    )
}
export default Tours;