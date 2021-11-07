import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from "../Pages/Admin/Dashboard";
import Roles from "../Pages/Admin/Roles";
import Ventas from "../Pages/Admin/Ventas";
import Index from "../Pages/Public/Index";
const Routes = () => {
    return (
        <Router>
            < Switch>
                <Route path={['/dash', '/roles', '/ventas']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/roles'>
                                <Roles/>
                            </Route>
                            <Route path='/Ventas'>
                                <Ventas/>
                            </Route>
                        </Switch>
                    </PrivateLayout>
                </Route>
                <Route path='/'>
                    <PublicLayout>
                        <Index/>
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
