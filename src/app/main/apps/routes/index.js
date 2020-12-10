import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../Login/Login';
import LoginTable from '../List/LoginTable'

export default function Routes() {
    return (
        // <BrowserRouter>
        <Switch>

            <Route path="/login" exact component={Login}/>
            <Route path="/loginTable" exact component={LoginTable}/>


            {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}

            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Login}/>
        </Switch>
        // </BrowserRouter>
    );
}

