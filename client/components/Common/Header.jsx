import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";

const Header = () => {
  return (
    <div className="card-panel teal lighten-2">
      <IndexLink to="/" activeClassName="active"> Home</IndexLink>
      {" | "}
      <Link to="/documents" activeClassName="active">Documents</Link>
       {" | "}
      <Link to="/about" activeClassName="active">About</Link>
       {" | "}
      <Link to="/users" activeClassName="active">Users</Link>
      </div>
  );
};

export default Header;
