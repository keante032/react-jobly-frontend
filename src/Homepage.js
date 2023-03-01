import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "./UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Jobly</h1>
                <p className="lead">All the jobs in one, convenient place.</p>
                {currentUser
                    ? <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
                    : (
                        <p>
                            <LinkContainer to="/login">
                                <Button variant="primary">Log in</Button>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Button variant="primary">Sign up</Button>
                            </LinkContainer>
                        </p>
                    )}
            </div>
        </div>
    );
}

export default Homepage;