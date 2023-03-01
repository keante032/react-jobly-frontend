import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";

/**
 * This is rendered by App inside a BrowserRouter.
 * 
 */
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {/* <Homepage /> */}
                    <p>placeholder: /</p>
                </Route>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/jobs">
                    {/* <JobList /> */}
                    <p>placeholder: jobs</p>
                </Route>
                <Route exact path="/login">
                    {/* <LoginForm /> */}
                    <p>placeholder: login</p>
                </Route>
                <Route exact path="/signup">
                    {/* <SignupForm /> */}
                    <p>placeholder: signup</p>
                </Route>
                <Route path="/profile">
                    {/* <ProfileForm /> */}
                    <p>placeholder: profile</p>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;