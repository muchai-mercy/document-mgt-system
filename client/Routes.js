import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App.jsx";
import { HomePage } from "./components/Home/Homepage.jsx";
import { DocumentsPage } from "./components/Documents/Documents.jsx";
import { ManageDocument } from "./components/Documents/ManageDocument.jsx";
import { UsersPage } from "./components/Users/Users.jsx";
import { ManageUsers } from "./components/Users/ManageUsers.jsx";
import { RolesPage } from "./components/Roles/Roles.jsx";
import { ManageRoles } from "./components/Roles/ManageRoles.jsx";
import { Login } from "./components/Authentication/Login.jsx";
import { SignUp } from "./components/Authentication/SignUp.jsx";
import { UserProfile } from "./components/Users/UserProfile.jsx";

const loggedIn = () => {
  return !!window.localStorage.getItem('jwt');
};

const requireAuth = (nextState, replace) => {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    });
  }
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="signup" component={SignUp} />
    <Route path="documents" component={DocumentsPage} onEnter={requireAuth} />
    <Route path="document" component={ManageDocument} onEnter={requireAuth} />
    <Route path="documents/:id" component={ManageDocument} onEnter={requireAuth} />
    <div>
    <Route path="roles" component={RolesPage} onEnter={requireAuth} />
    <Route path="role" component={ManageRoles} onEnter={requireAuth} />
    <Route path="roles/:id" component={ManageRoles} onEnter={requireAuth} />
    <Route path="users" component={UsersPage} onEnter={requireAuth} />
     <Route path="profile" component={UserProfile} onEnter={requireAuth} />
    <Route path="user" component={ManageUsers} onEnter={requireAuth} />
    <Route path="users/:id" component={ManageUsers} onEnter={requireAuth} />
    </div>
  </Route>
);
