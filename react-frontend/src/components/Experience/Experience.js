import React from "react";
import eightharmylogo from "../../assets/eightharmy.svg";
import sinjeonlogo from "../../assets/sinjeon.jpeg";

const Experience = () => {
	return (
		<section>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={sinjeonlogo} />
				<div className="px-5 text-left text-xs w-full">
					<h4 className="text-base font">Hanseo University</h4>
					<div className="flex justify-between mb-2">
						<p>South Korea, Seosan</p>
						<p className="text-gray-500">Mar/2016 - Jun/2020</p>
					</div>
					<p className="flex-wrap">Airline Pilot Flight Operations</p>
					<p>Withdrew in junior year</p>
				</div>
			</div>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={eightharmylogo} />
				<div className="px-5 text-left text-xs w-full">
					<h4 className="text-base font">Hanseo University</h4>
					<div className="flex justify-between mb-2">
						<p>South Korea, Seosan</p>
						<p className="text-gray-500">Mar 2016 - Jun 2020</p>
					</div>
					<p className="flex-wrap">Airline Pilot Flight Operations</p>
					<p>Withdrew in junior year</p>
				</div>
			</div>
		</section>
	);
}

export default Experience;