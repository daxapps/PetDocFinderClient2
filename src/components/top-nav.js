import React from "react";
// import {Router, Route, Link} from 'react-router-dom';
import { Link } from "react-router-dom";
// import App from './app';
// import Vetlist from './vetlist';

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
						data-target="#bs-example-navbar-collapse-1"
						aria-expanded="false"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					
				</div>
				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav navbar-left">
						<li><Link to="/">Home</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/register">SignUp</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/dashboard">Vet List</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
