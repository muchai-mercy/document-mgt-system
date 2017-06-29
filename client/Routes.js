import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App.jsx";
import HomePage from "./components/Home/Homepage.jsx";
import DocumentsPage from "./components/Documents/Documents.jsx";
import ManageDocument from "./components/Documents/ManageDocument.jsx";
import UsersPage from "./components/Users/Users.jsx";
import ManageUsers from "./components/Users/ManageUsers.jsx";
import Login from "./components/Authentication/Login.jsx";
import SignUp from "./components/Authentication/SignUp.jsx";

function loggedIn() {
  return !!window.localStorage.getItem('jwt');
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="signup" component={SignUp} />
    <Route path="documents" component={DocumentsPage} onEnter={requireAuth} />
    <Route path="document" component={ManageDocument} onEnter={requireAuth} />
    <Route path="documents/:id" component={ManageDocument} onEnter={requireAuth} />
    { localStorage.getItem('role') === 'Admin' ? 
    <div>
    <Route path="users" component={UsersPage} onEnter={requireAuth} />
    <Route path="user" component={ManageUsers} onEnter={requireAuth} />
    <Route path="users/:id" component={ManageUsers} onEnter={requireAuth} />
    </div>
    : null}
  </Route>
);
