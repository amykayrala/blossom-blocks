import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => {
    const price = item.sale ? item.salePrice : item.price;
    return sum + parseFloat(price);
  }, 0);

  return (
    <Container style={{ marginTop: '60px', marginBottom: '60px', minHeight: '100vh'}}>
      <ProgressBar animated now={50} className="custom-progress" label={'1. Cart'} style={{marginTop: '86px', width: '100%'}} />
      <h1 className="txt-blue mb-4 text-left Poetsen-One" style={{ paddingTop: '2rem' }}>
        <strong>Your Cart</strong>
      </h1>
      <Row>
        <Col md={8}>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <Card className="mb-3 border-1" key={item.id}>
                  <Row className="g-0">
                    <Col md={4} style={{display: 'flex', justifyContent :'center', alignItems : 'center'}}>
                      <Card.Img
                        src={item.image}
                        style={{ objectFit: 'cover', height: '175px' }}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                        <Row style={{ marginBottom: '16px' }}>
                          {item.sale && (
                            <Col lg="2">
                              <Card.Text style={{ textDecoration: 'line-through' }}>
                                {item.price.toFixed(2)}$
                              </Card.Text>
                            </Col>
                          )}
                          <Col lg="2" style={{ paddingLeft: '0' }}>
                            <Card.Text style={{ color: item.sale ? '#e84c4d' : 'inherit' }}>
                              {item.sale ? item.salePrice.toFixed(2) : item.price.toFixed(2)}$
                            </Card.Text>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                          <Button className="button-pink" onClick={() => removeFromCart(item.id)}>
                            Remove from Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            )}

        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <Card.Text>
                Total Items: {cart.length}
                <br />
                Total Price: {totalPrice.toFixed(2)}$
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
