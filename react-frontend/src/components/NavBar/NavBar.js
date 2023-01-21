import React from "react";
import resume from "../../assets/resume.pdf";

const NavBar = () => {
	return (
		<nav className="py-10 mb-12 flex justify-between">
			<h1 className="text-4xl font-bebasneue font-medium text-slate-900">CHAN</h1>
			<button type="submit" onClick={() => window.open(resume)} className="bg-gradient-to-r from-teal-600 to-teal-900 text-slate-100 font-medium text-base px-4 rounded-full">Resume</button>
		</nav>
	);
}

export default NavBar;