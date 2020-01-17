import React, { Component } from "react";
import { Link } from "react-router-dom";

// Reactboostrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavbarHeader extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/" className="navbar-brand">
            Tranxercise
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
