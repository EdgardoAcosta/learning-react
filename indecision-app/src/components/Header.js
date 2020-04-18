import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

    </Navbar>

);

Header.defaultProps = {
    title: 'Default'
};


export default Header;
