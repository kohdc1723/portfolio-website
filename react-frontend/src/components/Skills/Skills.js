import React from "react";
import {c, cpp, csharp, css, dotnet, firebase, git, html, jakartaee, java, javascript, mongodb, mysql, nodejs, react} from "../../assets/skills"

const Skills = () => {
    return (
        <section>
            <div className="flex flex-wrap justify-start text-sm text-gray-500">
                <div className="p-3">
                    <img src={html} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">C</h3>
                </div>
                <div className="p-3">
                    <img src={css} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">C++</h3>
                </div>
                <div className="p-3">
                    <img src={javascript} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">C#</h3>
                </div>
                <div className="p-3">
                    <img src={nodejs} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">Java</h3>
                </div>
                <div className="p-3">
                    <img src={react} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={c} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={cpp} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={csharp} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={dotnet} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={java} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={jakartaee} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={firebase} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={mysql} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={mongodb} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
                <div className="p-3">
                    <img src={git} className="mx-auto w-16 h-16" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
            </div>
        </section>
    );
}

export default Skills;