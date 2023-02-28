import React from "react";
import eightharmylogo from "../../assets/eightharmy.svg";
import revere from "../../assets/revere.jpeg";

const Experience = () => {
	return (
		<div>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={revere} alt="revere-logo" />
				<div className="pl-3 text-left text-xs w-full">
					<div className="flex items-center font-medium text-slate-900">
						<h4 className="text-base">Revere Communications</h4>
						<h4 className="ml-10">BCIT Industry Sponsored Student Project</h4>
					</div>
					<div className="flex justify-between text-slate-500 font-medium">
						<p>Canada</p>
						<p>Jan 2023 - Present</p>
					</div>
					<div className="text-slate-900 py-3">
						<p>- Developing a "Developer Journey Map", an interactive web application, to facilitate developers' discovery of new tools and their use in building things</p>
						<p>- React.js / Node.js / Express.js / MongoDB</p>
					</div>
				</div>
			</div>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={eightharmylogo} alt="eighth-army-logo" />
				<div className="pl-3 text-left text-xs w-full">
					<div className="flex items-center font-medium text-slate-900">
						<h4 className="text-base">US 8th Army Korean Augmentation To the United States Army</h4>
						<h4 className="ml-10">Air Operations Specialist</h4>
					</div>
					<div className="flex justify-between text-slate-500 font-medium">
						<p>South Korea</p>
						<p className="text-gray-500">Aug 2016 - Apr 2018</p>
					</div>
					<div className="text-slate-900 py-3">
						<p>- Coordination and determination of flight plans</p>
						<p>- Issuance of prior permission for landing on the heliport</p>
						<p>- Documentation of aircraft arrival and departure information</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;