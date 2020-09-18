import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Navbar className="nav-bar">
        <Navbar.Brand href="#home">
          <Link to={"/home"}>
            <img className="site-logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Form inline>
          <FormControl
            className="search-bar"
            type="text"
            placeholder="Search your Destination..."
            className="mr-sm-2"
          />
        </Form>
        <Nav className="ml-auto nav-item">
          <Nav.Link href="/news">News</Nav.Link>
          <Nav.Link href="/destination">Destination</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Link to={"/login"}>
            <Button className="button">Login</Button>
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
