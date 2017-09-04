import React from "react";
import { Link } from "react-router-dom";

import "./top-nav.css";

export default function TopNav() {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-collapse"  id="navbarNav">
					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item">
							<Link to="/register">SignUp</Link>
						</li>
						<li className="nav-item">
							<Link to="/dashboard">Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
