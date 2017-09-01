import React from "react";
import Banner from "./banner.jpg";
import "./header.css";

export function Header() {
	return (
		<header>
			<h1>Pet Doc Finder</h1>
			<h2>Find the best veterinarian for your loved one</h2>
			<img src={Banner} alt="cute pupies and kittens" />
		</header>
	);
}

export default Header;
