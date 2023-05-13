import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../components/Cart';


const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="home">HOME</Nav.Link>
            <Nav.Link href="store">STORE</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Cart />
          </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent