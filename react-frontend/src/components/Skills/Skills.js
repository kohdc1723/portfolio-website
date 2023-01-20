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
            <div className="flex flex-wrap p-3 gap-5 text-sm text-slate-500">
                {skills.map((skill) => (
                    <div>
                        <img src={urlFor(skill.logo)} className="mx-auto w-16 h-16" />
                        <h3 className="text-center">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;