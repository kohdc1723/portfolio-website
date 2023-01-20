import React from "react";
import eightharmylogo from "../../assets/eightharmy.svg";
import sinjeonlogo from "../../assets/sinjeon.jpeg";

const Experience = () => {
	return (
		<div>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={sinjeonlogo} alt="sinjeon-logo" />
				<div className="pl-3 text-left text-xs w-full">
					<div className="flex items-center font-medium text-slate-900">
						<h4 className="text-base">Part-time Server</h4>
						<h4 className="ml-10">Sinjeon Tteokbokki</h4>
					</div>
					<div className="flex justify-between text-slate-500 font-medium">
						<p>Incheon, South Korea</p>
						<p>May 2018 - Jul 2021</p>
					</div>
					<div className="text-slate-900 py-3">
						<p>Part-time server</p>
					</div>
				</div>
			</div>
			<div className="flex w-full py-3">
				<img className="w-16 h-16" src={eightharmylogo} alt="eighth-army-logo" />
				<div className="pl-3 text-left text-xs w-full">
					<div className="flex items-center font-medium text-slate-900">
						<h4 className="text-base">Air Operations Specialist</h4>
						<h4 className="ml-10">United States Army Garrison Yongsan</h4>
					</div>
					<div className="flex justify-between text-slate-500 font-medium">
						<p>Seoul, South Korea</p>
						<p className="text-gray-500">Aug 2016 - Apr 2018</p>
					</div>
					<div className="text-slate-900 py-3">
						<p>Mandatory Military Service</p>
						<p>Coordination and determination of flight plans</p>
						<p>Issuance of prior permission for landing on the heliport</p>
						<p>Documentation of aircraft arrival and departure information</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;