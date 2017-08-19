import React from "react";
// import {Router, Route, Link} from 'react-router-dom';
import { Link } from "react-router-dom";
// import App from './app';
// import Vetlist from './vetlist';
import HeaderBar from "./header-bar";

import "./top-nav.css";

export default function TopNav() {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			
				<div className="navbar-header">
					
				</div>
				<div
					
				>
					<ul className="nav navbar-nav navbar-left">
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
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
				</div>
			
		</nav>
	);
}
