import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
const NavbarCompomponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Laravel</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link to="/" as={Link}>Dashboard</Nav.Link>
      <Nav.Link to="/task" as={Link}>Task</Nav.Link>
    </Nav>
  </Navbar>
      );
}
 
export default NavbarCompomponent;