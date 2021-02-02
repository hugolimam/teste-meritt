import React from "react"
import {Route, Redirect, Switch} from "react-router-dom"

import Dashboard from "./Pages/Dashboard/Dashboard"
import Bookmark from "./Pages/Bookmark/Bookmark"
export default () => (
    <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/bookmark" component={Bookmark} />
    </Switch>
)