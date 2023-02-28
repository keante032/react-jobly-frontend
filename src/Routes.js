import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

/**
 * This is rendered by App inside a BrowserRouter.
 * 
 */
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <p>Placeholder component for Homepage.</p>
                </Route>
                <Route exact path="/companies">
                    <p>Placeholder component for Companies List.</p>
                </Route>
                <Route exact path="/companies/:handle">
                    <p>Placeholder component for Company Detail.</p>
                </Route>
                <Route exact path="/jobs">
                    <p>Placeholder component for Jobs List.</p>
                </Route>
                <Route exact path="/login">
                    <p>Placeholder component for Login Form.</p>
                </Route>
                <Route exact path="/signup">
                    <p>Placeholder component for Signup Form.</p>
                </Route>
                <Route path="/profile">
                    <p>Placeholder component for Profile Detail/Form.</p>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;