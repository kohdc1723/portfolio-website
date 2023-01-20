import React, { useState, useEffect } from 'react';
import { urlFor, client } from "../../client";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const query = "*[_type == 'projects']"

		client.fetch(query).then((data) => {
			setProjects(data);
		});
	}, []);

	return (
		<div>
			<div className="py-3 text-3xl text-teal-700 font-medium">Projects</div>
				<div className="md:flex md:gap-5">
					{projects.map((project, index) => (
						<div className="group relative w-full h-fit shadow-xl rounded-xl shadow-teal-700 md:w-1/2">
							<img className="w-full h-full p-1 object-contain rounded-xl" src={urlFor(project.thumbnail)} alt="project thumbnail" key={index} />

							<div className="invisible absolute p-3 w-full h-full bottom-0 opacity-95 rounded-xl bg-slate-300 group-hover:visible">
								<h4 className="font-bold text-teal-700 text-2xl text-center">{project.title}</h4>
								<div className="flex">
									{project.stack.map((stack) => (
										<div className="bg-teal-700 justify-start mr-2 rounded-xl px-2 text-white">{stack}</div>
									))}
								</div>
								<div className="flex justify-center gap-20 text-5xl text-teal-900">
									<AiOutlineLink className="hover:cursor-pointer" onClick={(e) => {
										e.preventDefault();
										window.open(project.projectLink, "_blank");
									}}/>
									<AiFillGithub className="hover:cursor-pointer" onClick={(e) => {
										e.preventDefault();
										window.open(project.gitLink, "_blank");
									}}/>
								</div>
							</div>
						</div>
					))}
				</div>
		</div>
	);
}

export default Projects;