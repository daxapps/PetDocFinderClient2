import React from "react";
import { Link } from "react-router-dom";
import HeaderBar from "./header-bar";

import "./top-nav.css";

export default function TopNav() {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#navbarNav"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
				</div>
				<div className="collapse navbar-collapse"  id="navbarNav">
					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item">
							<Link to="/register">SignUp</Link>
						</li>
						<li className="nav-item">
							<Link to="/dashboard">Login</Link>
						</li>
						<li className="nav-item">
							<HeaderBar />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
