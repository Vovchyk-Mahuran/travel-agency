import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { countries } from '../mock/countries'
import { filterTours, onChangeValues, sortByPrice, sortByPriceToLow } from '../reducers/tourReducer';

function Search() {
    const dispatch = useDispatch();
    const onChange = (e: any) => {
        dispatch(onChangeValues({
            name: e.target.name,
            value: e.target.type === 'checkbox'|| e.target.type === 'switch' ? e.target.checked : e.target.value,
        }))            
    };
    const onClickHandler = () => {
        dispatch(filterTours());
    }
    return (
        <div>
      <Form>
            <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={onChange} type="text" placeholder="Enter name" />
                    </Form.Group>
            </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Price from</Form.Label>
                        <Form.Control name="priceFrom" onChange={onChange} type="number" placeholder="Price from" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Price to</Form.Label>
                        <Form.Control name="priceTo" onChange={onChange} type="number" placeholder="Price to" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country from</Form.Label>
                        <Form.Select name="countryFrom" onChange={onChange} defaultValue="Choose country from...">
                            <option>Choose...</option>
                            {countries.map((country) => <option>{country}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country to</Form.Label>
                        <Form.Select name="countryTo" onChange={onChange} defaultValue="Choose country to...">
                            <option>Choose...</option>
                            {countries.map((country) => <option>{country}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check name="pets" onChange={onChange} type="checkbox" label="Pets" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check name="breakfast" onChange={onChange} type="switch" label="Breakfast" />
                </Form.Group>
            </Form>
            <Button onClick={onClickHandler} variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="success" onClick={() => {dispatch(sortByPrice());}}>
            Sort by price
            </Button>
        </div>
  );
}
export default Search;
