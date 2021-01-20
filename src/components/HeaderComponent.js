import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <header className="container">
                    <Navbar dark sticky="top" expand="md">
                        <NavbarBrand className="mr-auto" href="/home"><img src="assets/images/Majaeks-Heart-Logo-2525-Black.png" alt="Majaek's Heart Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} data-toggle="collapse" data-target="#expandMenu" />
                        <Collapse isOpen={this.state.isNavOpen} navbar id="expandMenu">
                            <Nav navbar className="ml-auto">
                                <NavItem className="mx-auto">
                                    <NavLink className="nav-link text-light" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/about">About Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;