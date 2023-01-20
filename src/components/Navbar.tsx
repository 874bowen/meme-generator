import React from "react";
import logo from "../assets/troll-face.png";

const Navbar = () => {
	return (
		<nav className="nav">
			<img src={logo} alt="" width="50px" />
			<h3>Meme Generator</h3>
		</nav>
	);
};

export default Navbar;