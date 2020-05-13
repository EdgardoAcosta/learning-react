import React from "react";
import {Link, NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Header = (props) => (

    <Navbar bg="primary" variant="dark">
        <Link to="/"><Navbar.Brand>{props.title}</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <NavLink to="/create" className="nav-link" activeClassName="active">Create</NavLink>
            <NavLink to="/help" className="nav-link" activeClassName="active">Help</NavLink>
        </Nav>
    </Navbar>
);

Header.defaultProps = {
    title: 'Expenses'
};
export default Header


