import './App.css';
import { Card, Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import SubmitBtn from './SubmitBtn';
import legowall from './images/legowall.png';
import legobuilding from './images/legobuilding.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';

function DeliveryPayment() {

    {/* thank u msg */}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="delivery-section py-5" style={{ marginTop: '40px' }}>
      <Container>
    <ProgressBar animated now={99} className="custom-progress" label={'2. Delivery & Payment Information'} style={{width: '100%'}} />
    <br></br>
        <Row className="align-items-start">

          {/* Forms Section */}
          <Col md={8}>
            <h1 className="txt-blue mb-3 text-left Poetsen-One"><strong>Checkout</strong></h1>
            <h4 className="txt-pink mb-1 text-left body">Complete your order below</h4>
            <Button className="button-pink mt-3 my-3" as={NavLink} to="/cart">Back</Button>

            {/* Delivery Info Card */}
            <Card className="mb-4 border-1">
              <Card.Body>
                <Card.Title className="txt-blue-smaller Poetsen-One">Delivery Information</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter your zip code" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

            {/* Payment Info Card */}
            <Card className="mb-4 border-1">
              <Card.Body>
                <Card.Title className="txt-blue-smaller Poetsen-One">Payment Information</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="1234 5678 9012 3456" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formExpiry">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCVC">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control type="text" placeholder="123" />
                  </Form.Group>
                  </Form>
                
                <>
                    <Button className="lego-button mt-3" onClick={handleShow}>Proceed with Payment</Button>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Your building journey awaits!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Thank you for ordering from Blossom Blocks! A confirmation email has been sent to your inbox.</Modal.Body>
                        <Modal.Footer>
                        <Button className="button-pink" onClick={handleClose}>
                            View Order Receipt
                        </Button>
                        <Button className="button-pink" onClick={() => window.location.href = '/blossom-blocks/reviews'}>
                            Submit a Review
                        </Button>
                        <Button className="button-pink" onClick={() => window.location.href = '/blossom-blocks/shop'}>
                            Shop More
                        </Button>
                        </Modal.Footer>
                    </Modal>
                  </>
                
              </Card.Body>
            </Card>
          </Col>

          {/* Side Image */}
          <Col md={4} className="mb-4 py-2 d-none d-md-block">
            <Image
              src={legobuilding}
              alt="Decorative"
              fluid
              rounded
            />
          </Col>

        </Row>
      </Container>

      
    </div>

    
  );
}

export default DeliveryPayment;
