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
				<div className="md:grid md:grid-cols-2 md:gap-5">
					{projects.map((project, key) => (
						<div key={key} className="group relative w-full h-fit mb-3 shadow-xl rounded-xl shadow-teal-700">
							<img className="w-full h-full p-1 object-contain rounded-xl" src={urlFor(project.thumbnail)} alt="project thumbnail" />

							<div className="invisible absolute p-3 w-full h-full bottom-0 opacity-95 rounded-xl bg-slate-300 group-hover:visible">
								<h4 className="font-bold py-1 text-slate-900 text-xl text-center">{project.title}</h4>
								<h4 className="font-bold py-1 text-slate-700 text-sm text-center">{project.period}</h4>
								<div className="flex justify-center gap-3 py-1">
									{project.stack.map((stack, key) => (
										<div key={key} className="bg-slate-700 rounded-xl text-sm px-2 text-slate-100">{stack}</div>
									))}
								</div>
								<div className="text-center py-1 text-sm text-slate-900">{project.description}</div>
								<div className="flex py-1 justify-center gap-20 text-4xl text-slate-700">
									<AiOutlineLink className="hover:cursor-pointer" hidden={project.projectLink === undefined ? "hidden" : ""} onClick={(e) => {
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