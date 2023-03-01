import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "./UserContext";

/** Navigation bar that shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 * 
 * This is rendered by App, alongside Routes.
 */

const Navigation = ({ logout }) => {
    const { currentUser } = useContext(UserContext);

    const loggedInNav = () => {
        return (
            <Nav className="ms-auto">
                <LinkContainer to="/companies">
                    <Nav.Link>Companies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/jobs">
                    <Nav.Link>Jobs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link onClick={logout}>Log out {currentUser.first_name || currentUser.username}</Nav.Link>
                </LinkContainer>
            </Nav>
        )
     };
    
    const loggedOutNav = () => {
        return (
            <Nav className="ms-auto">
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
            </Nav>
        )
     };

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Jobly</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {currentUser ? loggedInNav() : loggedOutNav()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;