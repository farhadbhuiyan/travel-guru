import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import './Header.css';


const Header = () => {
  return (
    <Container fluid>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
    <a href="/home">
    <img className="site-logo" src={logo} alt=""/>
    </a>
    </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2" />
    </Form>
    <Nav className="ml-auto">
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/destination">Destination</Nav.Link>
      <Nav.Link href="blog">Blog</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Button variant="outline-info">Login</Button>
    </Nav>
  </Navbar>
  </Container>
  );
};

export default Header;