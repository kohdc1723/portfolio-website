import React, { useState } from "react";
import { Skills, Education, Experience } from "../../components";

const About = () => {
    const [currentTab, setCurrentTab] = useState("1");

    const tabs = [
        {
            id: 1,
            title: "Skills",
            content: <Skills />
        },
        {
            id: 2,
            title: "Education",
            content:<Education />
        },
        {
            id: 3,
            title: "Experience",
            content: <Experience />
        }
    ];

    const onClickHandler = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className="py-4">
            <div className="text-3xl">About me</div>
            <div className="flex justify-left text-white">
                {tabs.map((tab, i) => 
                    <button className="h-8 w-24 mr-1 rounded-t-lg bg-teal-500" key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={onClickHandler}>
                        {tab.title}
                    </button>
                )}
            </div>
            <div className="p-3">
                {tabs.map((tab, i) => 
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div>
                                {tab.content}
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;