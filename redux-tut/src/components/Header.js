import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const price = useSelector((state)=>state.counter.count)
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className='ms-2 me-5'>Shopify</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
      <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
     </Nav>
    <Button size="lg" disabled>Account Balance : {1000 - price}</Button>
  </Navbar.Collapse>
  </Container>
</Navbar> 
    </div>
  )
}

export default Header