import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top"  >
        <Container>
          <Navbar.Brand>logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ paddingLeft: 90 }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
