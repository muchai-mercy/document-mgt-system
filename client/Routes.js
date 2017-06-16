import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App.jsx";
import HomePage from "./components/Home/Homepage.jsx";
import AboutPage from "./components/About/AboutPage.jsx";
import DocumentsPage from "./components/Documents/Documents.jsx";
import ManageDocument from "./components/Documents/ManageDocument.jsx";
import UsersPage from "./components/Users/Users.jsx";
import ManageUsers from "./components/Users/ManageUsers.jsx";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="documents" component={DocumentsPage} />
    <Route path="document" component={ManageDocument} />
    <Route path="documents/:id" component={ManageDocument} />
    <Route path="about" component={AboutPage} />
    <Route path="users" component={UsersPage} />
    <Route path="user" component={ManageUsers} />
    <Route path="users/:id" component={ManageUsers} />
  </Route>
);
