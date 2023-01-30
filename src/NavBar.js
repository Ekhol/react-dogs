import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar({ dogs }) {
    const navLinks = dogs.map(dog => (
        <NavItem>
            <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
                {dog.name}
            </NavLink>
        </NavItem>
    ));

    return (
        <div>
            <Navbar expand="md">
                <NavLink exact to="/dogs" className="navbar-brand">
                    Home
                </NavLink>
                <Nav className='ml-auto' navbar>
                    {navLinks}
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;