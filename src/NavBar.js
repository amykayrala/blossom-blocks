import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function NavBar() {
  return (
    <>
      <Navbar className='NavBar'>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="NavBarBrand">Blossom Blocks</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Button as={NavLink} to="/whatsnew" variant="button-pink">What's New</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;