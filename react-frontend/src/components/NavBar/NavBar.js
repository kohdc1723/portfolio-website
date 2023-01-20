import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
	return (
		<nav className="py-10 mb-12 flex justify-between">
			<h1 className="text-3xl font-mono font-medium text-slate-900">CHAN</h1>
				<ul className="flex items-center">
					<li><BsFillMoonStarsFill className="cursor-pointer text-2xl text-slate-900"/></li>
					<li><div className="bg-gradient-to-r from-teal-600 to-teal-900 text-white font-medium px-4 py-1 rounded-full ml-8">Resume</div></li> 
				</ul>
		</nav>
	);
}

export default NavBar;