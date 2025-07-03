import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <Container>
      <Button as={NavLink} to="/shop" variant="button-pink">Shop Now</Button>
    </Container>
  );
}

export default Home;