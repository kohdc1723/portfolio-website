import React from "react";
import bcitlogo from "../../assets/bcit.jpeg";
import hsulogo from "../../assets/hsu.jpeg";

const Education = () => {
    return (
        <div>
            <div className="flex w-full py-3">
                <img className="w-16 h-16" src={bcitlogo} alt="bcit-logo" />
                <div className="pl-3 text-left text-xs w-full">
                    <h4 className="text-base font-medium text-slate-900">British Columbia Institute of Technology</h4>
                    <div className="flex justify-between text-slate-500 font-medium">
                        <p>Burnaby, Canada</p>
                        <p>Sep 2021 - Present</p>
                    </div>
                    <div className="text-slate-900 py-3">
                        <p className="flex-wrap">Computer Systems Technology (Information Systems option)</p>
                        <p>Expected graduation: May 2023</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full py-3">
                <img className="w-16 h-16" src={hsulogo} alt="hsu-logo" />
                <div className="pl-3 text-left text-xs w-full">
                    <h4 className="text-base font-medium text-slate-900">Hanseo University</h4>
                    <div className="flex justify-between text-slate-500 font-medium">
                        <p>Seosan, South Korea</p>
                        <p>Mar 2016 - Jun 2020</p>
                    </div>
                    <div className="text-slate-900 py-3">
                        <p className="flex-wrap">Airline Pilot Flight Operations</p>
                        <p>Withdrew in junior year</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;