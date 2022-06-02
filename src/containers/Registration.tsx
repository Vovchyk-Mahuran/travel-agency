import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Register from './Register';

interface RegistrationProps {
  show: boolean,
  onHide:()=>void,
}

function Registration({
  show, onHide,
}: RegistrationProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      // size="m"
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
            <Login />
          </Tab>
          <Tab eventKey="Registration" title="Registration">
            <Register />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Registration;
