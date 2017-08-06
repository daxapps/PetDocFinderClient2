import React from "react";

import "./signup-form.css";

export function SignupForm() {
	return (
		<form method="POST" className="forms">
			<div className="container">
				<h5>Find Your Pet Doc Today</h5>
				<input type="text" placeholder="Enter Username" name="username" required />
				<input type="text" placeholder="Enter Email" name="email" required />
				<input
					type="password"
					placeholder="Enter Password"
					name="psw"
					required
				/>
				<div>
					<button type="button" className="cancelbtn">
						Cancel
					</button>
					<button type="submit" className="signupbtn">
						Sign Up
					</button>
				</div>
			</div>
		</form>
	);
}

export default SignupForm;
