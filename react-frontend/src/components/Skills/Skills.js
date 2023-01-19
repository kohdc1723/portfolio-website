import React from "react";
import clogo from "../../assets/c.png";
import cpplogo from "../../assets/cpp.png";
import csharplogo from "../../assets/csharp.png";
import javalogo from "../../assets/java.png";
import jslogo from "../../assets/javascript.png";

const Skills = () => {
    return (
        <section>
            <div className="flex flex-wrap justify-between text-sm text-gray-500">
                <div className="p-3">
                    <img src={clogo} width={75} height={75} className="mx-auto" />
                    <h3 className="text-center">C</h3>
                </div>
                <div className="p-3">
                    <img src={cpplogo} width={75} height={75} className="mx-auto" />
                    <h3 className="text-center">C++</h3>
                </div>
                <div className="p-3">
                    <img src={csharplogo} width={75} height={75} className="mx-auto" />
                    <h3 className="text-center">C#</h3>
                </div>
                <div className="p-3">
                    <img src={javalogo} width={75} height={75} className="mx-auto" />
                    <h3 className="text-center">Java</h3>
                </div>
                <div className="p-3">
                    <img src={jslogo} width={75} height={75} className="mx-auto" />
                    <h3 className="text-center">JavaScript</h3>
                </div>
            </div>
        </section>
    );
}

export default Skills;