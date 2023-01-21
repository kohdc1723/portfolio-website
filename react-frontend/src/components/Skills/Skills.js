import React, { useState, useEffect } from 'react';
import { urlFor, client } from "../../client";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
		const query = "*[_type == 'skills']"

		client.fetch(query).then((data) => {
			setSkills(data);
		});
	}, []);

    return (
        <div>
            <div className="flex flex-wrap p-3 gap-5 text-xs font-medium text-slate-500">
                {skills.map((skill, key) => (
                    <div key={key}>
                        <img src={urlFor(skill.logo)} alt="skill-logo" className="mx-auto w-16 h-16" />
                        <h3 className="text-center">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;