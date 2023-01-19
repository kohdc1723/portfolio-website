import React from "react";
import bcitlogo from "../../assets/bcit.jpeg";
import hsulogo from "../../assets/hsu.jpeg";

const Education = () => {
    return (
        <section>
            <div className="flex w-full py-3">
                <img className="w-16 h-16" src={bcitlogo} />
                <div className="px-5 text-left text-xs w-full">
                    <h4 className="text-base">British Columbia Institute of Technology</h4>
                    <div className="flex justify-between mb-2">
                        <p>Burnaby, Canada</p>
                        <p className="text-gray-500">Sep 2021 - Present</p>
                    </div>
                    <p className="flex-wrap">Computer Systems Technology<br />(Information Systems option)</p>
                    <p>Expected graduation: May 2023</p>
                </div>
            </div>

            <div className="flex w-full py-3">
                <img className="w-16 h-16" src={hsulogo} />
                <div className="px-5 text-left text-xs w-full">
                    <h4 className="text-base font">Hanseo University</h4>
                    <div className="flex justify-between mb-2">
                        <p>Seosan, South Korea</p>
                        <p className="text-gray-500">Mar 2016 - Jun 2020</p>
                    </div>
                    <p className="flex-wrap">Airline Pilot Flight Operations</p>
                    <p>Withdrew in junior year</p>
                </div>
            </div>
        </section>
    );
}

export default Education;