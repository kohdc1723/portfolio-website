import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
	return (
		<nav className="py-10 mb-12 flex justify-between">
			<h1 className="text-3xl font-burtons">CHAN</h1>
				<ul className="flex items-center">
					<li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
					<li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full ml-8">Resume</a></li> 
				</ul>
		</nav>
	);
}

export default NavBar;