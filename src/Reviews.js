import './App.css';
import { Card, Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import reviewSideImg from './images/legoflower.png';
import SubmitBtn from './SubmitBtn';

function Reviews() {
  const reviews = [
    {
      name: 'Sophie M.',
      content: 'Absolutely loved the attention to detail. The photos captured every special moment!',
    },
    {
      name: 'Liam C.',
      content: 'Professional, kind, and super creative. Highly recommend Lumiere Studio!',
    },
    {
      name: 'Aisha B.',
      content: 'The experience felt so natural and fun, and the final edits were stunning.',
    },
  ];

  return (
    <div className="reviews-section py-5" style={{ backgroundColor: '#fdf6fa' }}>
      <Container>
        <Row className="align-items-start">

          {/* Reviews + Form */}
          <Col md={8}>
            <h1 className="txt-blue mb-4 text-left"><strong>Customer Reviews</strong></h1>

            {/* Review Cards */}
            <Row className="mb-4">
              {reviews.map((review, index) => (
                <Col md={4} key={index}>
                  <Card className="mb-3 h-100 border-1">
                    <Card.Body>
                      <Card.Title className="txt-blue-smaller">{review.name}</Card.Title>
                      <Card.Text>"{review.content}"</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Submission Form */}
            <div className="p-4 rounded">
              <h2 className="txt-blue-smaller mb-3">Leave a Review</h2>
              <Form>
                <Form.Group className="mb-3" controlId="reviewTextarea">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your review here..."
                  />
                </Form.Group>
                <SubmitBtn />
              </Form>
            </div>
          </Col>

        {/* Image */}
          <Col md={4} className="mb-4 d-none d-md-block">
            <Image
              src={reviewSideImg}
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

export default Reviews;
