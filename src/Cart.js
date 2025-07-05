import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import tropical from './media/tropical.png'
import { NavLink } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

function Cart() {
  return (
    <Container style={{marginTop: '60px', marginBottom: '60px'}}>
     <ProgressBar animated now={50} className="custom-progress" label={'1. Cart'} style={{marginTop: '86px', width: '100%'}} />
      <h1 className="txt-blue mb-4 text-left Poetsen-One" style={{paddingTop: '2rem'}} ><strong>Your Cart</strong></h1>
      <Row>
        <Col md={8}>
          {/* Cart items will be listed here */}
            <CardGroup>
                <Card className="mb-3 h-100 border-1">
                    <Card.Img variant="top" src={tropical} style={{ objectFit: 'cover', height: '200px' , width: '100%'}} />
                    <Card.Body>
                        <Card.Title>Tropical Bouquet</Card.Title>
                        <Card.Text>
                            A vibrant arrangement of exotic blooms that never wilt.
                        </Card.Text>
                        <Row style={{marginBottom: '16px'}}>
                            <Col lg="4">
                                <Card.Text style={{textDecoration: 'line-through'}}>
                                    $17.99
                                </Card.Text>
                            </Col>
                            <Col lg="4" style={{paddingLeft: '0'}}>
                                <Card.Text style={{ color:'#e84c4d'}}>
                                    $15.99
                                </Card.Text>
                            </Col>
                        </Row>
                        <Button className="button-pink">Remove from Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Col>
        <Col md={4}>
          {/* Cart summary will be shown here */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <Card.Text>
                {/* Summary details will go here */}
                Total Items: 2
                <br />
                Total Price: $32.98
              </Card.Text>
              <Button href="/blossom-blocks/deliverypayment" className="lego-button" >Proceed to Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Cart;