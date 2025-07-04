import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {

  return (
    <>
      <Navbar fixed="top" className='NavBar'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="NavBarBrand">Blossom Blocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-left">
              <NavDropdown title="Shop" id="shop-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/shop?filter=age">By Age</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop?filter=theme">By Theme</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shop?filter=price">By Price Range</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/ourteam">Our Team</Nav.Link>
              <Nav.Link as={HashLink} to="/reviews">Reviews</Nav.Link>
              <Nav.Link as={HashLink} to="/#favourites" variant="button-pink">What's New</Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/cart">
                <i className="bi bi-cart3" style={{ fontSize: '1.5rem' }}></i>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;