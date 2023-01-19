import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Main = () => {
	return (
		<section className="py-3">
			<div className="text-center p-10">
				<h2 className="text-5xl text-teal-600 font-medium md:text-6xl">Dongchan Koh</h2>
				<h3 className="text-lg py-2 md:text-xl">looking for Software Developer job</h3>
				<p className="text-sm text-gray-500 mt-3 leading-6 text-center md:text-lg mx-auto">BCIT CST student with a variety of technical skills and strong ability in problem-solving.<br />Expected to graduate in May 2023 and eager to start a career in tech field.</p>
			</div>

			<div className="flex justify-center gap-16 text-5xl py-3 text-gray-500">
				<AiFillTwitterCircle />
				<AiFillLinkedin />
				<AiFillGithub />
			</div>

			{/* <div className="relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
				<img src={profile} fill objectFit="cover" />
			</div> */}
		</section>
	);
}

export default Main;