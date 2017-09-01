import React from "react";
import { Link } from "react-router-dom";

import HeaderBar from "./header-bar";

import "./top-nav.css";

export default function TopNav() {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<ul className="nav navbar-nav navbar-right">
				<li>
					<Link to="/register">SignUp</Link>
				</li>
			</ul>
			<ul className="nav navbar-nav navbar-right">
				<li>
					<Link to="/dashboard">Login</Link>
				</li>
			</ul>
			<ul className="nav navbar-nav navbar-right">
				<li>
					<HeaderBar />
				</li>
			</ul>
		</nav>
	);
}
