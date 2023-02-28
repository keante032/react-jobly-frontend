import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/** Navigation bar that shows up on every page.
 *
 * 
 * This is rendered by App, alongside Routes.
 */

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Jobly</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/companies">
                            <Nav.Link>Companies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/jobs">
                            <Nav.Link>Jobs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;