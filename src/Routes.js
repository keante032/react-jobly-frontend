import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/**
 * This is rendered by App inside a BrowserRouter.
 * 
 */
const Routes = ({ login, signup }) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>
                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>
                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>
                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>
                <PrivateRoute path="/profile">
                    <ProfileForm />
                </PrivateRoute>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;