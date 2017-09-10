import React from "react";
import { Link } from "react-router-dom";

import "./top-nav.css";

// const loginHref = (ifLoggedIn) ? /dashboard : #loginform
// Link to ={loginHref}
export default function TopNav() {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className=""  id="navbarNav">
					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item">
							<Link to="/register">SignUp</Link>
						</li>
						<li className="nav-item">
							<Link to="/login">Login / Demo</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
