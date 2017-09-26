import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./top-nav.css";

export default function TopNav() {
	return (
		<Navbar inverse collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">Pet Doc Finder</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<LinkContainer to="/register">
						<NavItem eventKey={1}>SignUp</NavItem>
					</LinkContainer>
					<LinkContainer to="/login">
						<NavItem eventKey={2}>Login</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
