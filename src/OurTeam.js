import './App.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import ceosImg from './images/legohome.png'; 

function OurTeam() {
  return (
    <div className="our-team-page" style={{marginTop: '40px'}}>
      {/* About Us Section */}
      <Container fluid className="aboutcompany py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="about-us-content px-4">
              <h1 className="txt-blue"><strong>About Blossom Blocks</strong></h1>
              <p>
                Blossom Blocks is a vibrant and innovative company dedicated to creating unique and engaging building blocks for children. 
                Our mission is to inspire creativity and imagination through play, while also providing high-quality, safe, and sustainable products. 
                Founded by two passionate individuals, we believe in the power of play to foster learning and development in young minds.
              </p>
              <Button as={HashLink} to="/reviews" className="lego-button">
                Leave us a review
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Image src={ceosImg} className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Values Section */}
      <section className="middle py-4 bg-pink text-center text-white">
        <Container>
          <Row className="g-4">
            <Col><h3 className="text-white">✨ Ambition</h3></Col>
            <Col><h3 className="text-white">🌟 Uniqueness</h3></Col>
            <Col><h3 className="text-white">🔍 Attention to Detail</h3></Col>
          </Row>
        </Container>
      </section>

      {/* About Creators Section */}
      <Container fluid className="aboutcreators py-5 bg-white">
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={ceosImg} className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <div className="about-creator-content px-4">
              <h1 className="txt-blue"><strong>About the Creator</strong></h1>
              <p>This website was made by Amy and Raphaelle, two software engineering students from the University of Ottawa.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="contact-page py-2 text-center">
        <h1 className="txt-blue"><strong>Contact the Blossom Blocks team</strong></h1>
        <p>We're a few clicks away! Don't hesitate to get in touch for any inquiries.</p>
        <Row className="py-4 text-start">
          <Col md={4}>
            <h4 className="txt-blue-smaller"><FaMapMarkerAlt className="me-2" /> Address</h4>
            <p>Fifth Avenue, NYC, NY</p>
          </Col>
          <Col md={4}>
            <h4 className="txt-blue-smaller"><FaEnvelope className="me-2" /> Contact</h4>
            <p>info@blossomblocks.com</p>
            <p><FaPhone className="me-2" /> +1 613 123 1231</p>
          </Col>
          <Col md={4}>
            <h4 className="txt-blue-smaller"><FaClock className="me-2" /> Hours</h4>
            <p>Monday to Friday: 9 AM – 6 PM</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
