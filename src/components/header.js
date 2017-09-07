import React from "react";
// import {connect} from 'react-redux';

import Banner from "./banner.jpg";
import "./header.css";

export function Header() {
	return (
		<header>
			<img src={Banner} alt="cute pupies and kittens" />
		</header>
	);
}

export default Header;
