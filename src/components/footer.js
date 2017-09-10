import React from "react";
import "./footer.css";
import Logo from "../Images/DAXapps-logo.png";

export function Footer() {
	return (
		<footer id="myFooter">
			<div className="container">
				<div className="col-sm-3">
					<div className="logo">
						<a href="http://developerdax.com/">
							<img src={Logo} alt="daxapps logo" />
						</a>
					</div>
				</div>
				<div className="footer-copyright">
					<p>© 2017 Copyright DaxApps </p>
				</div>
				<div className="col-sm-3 navbar-right" id="socnet-div">
					<div className="social-networks">
						<a href="https://twitter.com/DaxApps?lang=en" className="twitter">
							<i className="fa fa-twitter" />
						</a>
						<a href="https://github.com/daxapps" className="github">
							<i className="fa fa-github-alt" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
