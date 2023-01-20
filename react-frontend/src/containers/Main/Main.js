import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Main = () => {
	return (
		<div>
			<div className="text-center py-3">
				<h3 className="text-lg text-slate-900 py-1 md:text-xl">Hello, I'm</h3>
				<h2 className="text-5xl text-teal-700 font-medium py-1 md:text-6xl">Dongchan Koh</h2>
				<h3 className="text-lg text-slate-900 py-1 md:text-xl">seeking for Software Developer job</h3>
				<p className="text-sm text-slate-500 py-1 leading-6 text-center md:text-lg mx-auto">BCIT CST student with a variety of technical skills and strong ability in problem-solving.<br />Expected to graduate in May 2023 and eager to start a career in tech field.</p>
			</div>

			<div className="flex justify-center gap-16 text-5xl py-3 text-slate-500">
				<AiFillTwitterCircle />
				<AiFillLinkedin />
				<AiFillGithub />
			</div>
		</div>
	);
}

export default Main;