import React from "react";
import { Link, NavLink } from "react-router-dom";

/** Navigation bar that shows up on every page.
 *
 * 
 * This is rendered by App, alongside Routes.
 */

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Jobly</Link>
            <ul>
                <li>
                    <NavLink to="/companies">Companies</NavLink>
                </li>
                <li>
                    <NavLink to="/jobs">Jobs</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;