import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="lego-footer">
      <Container>
        <Row className="text-center align-items-center py-4">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Blossom Blocks</h5>
            <p>Building joy, one block at a time.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <div className="footer-links">
              <a href="/blossom-blocks">Home</a>
              <a href="/blossom-blocks/shop">Shop</a>
              <a href="/blossom-blocks/ourteam">Our Team</a>
              <a href="/blossom-blocks/reviews">Reviews</a>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="mailto:info@blossomblocks.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3 small">
            <p>
              Made with <FaHeart style={{ color: 'var(--pink)' }} /> by Amy & Raphaelle · © {new Date().getFullYear()} Blossom Blocks
            </p>
            <br></br>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;