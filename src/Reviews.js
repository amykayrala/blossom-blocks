import './App.css';
import { Card, Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import reviewSideImg from './images/legoflower.png';
import SubmitBtn from './SubmitBtn';

function Reviews() {
    const reviews = [
    {
        name: 'Milo R.',
        content: 'My niece LOVED the themed Blossom Blocks set! Super creative and beautifully packaged.',
    },
    {
        name: 'Tara N.',
        content: 'Such a fun build. The colors are so bright and everything came exactly as pictured!',
    },
    {
        name: 'Devon L.',
        content: 'Great gift idea — fast shipping, adorable packaging, and lots of fun options.',
    },
    ];

  return (
    <div className="reviews-section py-5">
      <Container>
        <Row className="align-items-start">

          {/* Reviews + Form */}
          <Col md={8}>
            <h1 className="txt-blue mb-4 text-left Poetsen-One"><strong>Customer Reviews</strong></h1>
            <h4 className="txt-pink mb-4 text-left body">What builders are saying.</h4>
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
              <h2 className="txt-blue-smaller mb-3 Poetsen-One">Leave a Review</h2>
              <h5 className="txt-pink mb-3 body">We love hearing from our customers! Share your thoughts and help others discover the joy of Blossom Blocks.</h5>
              <Form>
                <Form.Group className="mb-3" controlId="reviewTextarea">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about your experience here..."
                    className="card"
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
