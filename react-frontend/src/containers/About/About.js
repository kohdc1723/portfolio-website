import React, { useState } from "react";
import { Skills, Education, Experience } from "../../components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import profile from "../../assets/profile.jpg"

const About = () => {
    const [index, setIndex] = useState(0);
    const activeStyle = "text-indigo-900 font-bold mr-3 w-24 flex justify-center items-center border-b-4 border-indigo-900";
    const inactiveStyle = "text-indigo-900 font-medium mr-3 w-24 flex justify-center items-center";

    return (
        <div>
            <div className="relative mx-auto my-3 w-80 h-80 rounded-full overflow-hidden md:w-96 md:h-96">
                <img src={profile} alt="profile" className="object-cover" />
            </div>

            <div>
                <h3 className="py-3 text-3xl font-medium text-indigo-900">About me</h3>

                <Tabs className="pb-3 w-full" selectedIndex={index} onSelect={index => { setIndex(index); }}>
                    <TabList className="flex justify-left text-center">
                        <Tab className={index === 0 ? activeStyle : inactiveStyle}>Skills</Tab>
                        <Tab className={index === 1 ? activeStyle : inactiveStyle}>Education</Tab>
                        <Tab className={index === 2 ? activeStyle : inactiveStyle}>Experience</Tab>
                    </TabList>

                    <div className="p-3">
                        <TabPanel>
                            <Skills />
                        </TabPanel>
                        <TabPanel>
                            <Education />
                        </TabPanel>
                        <TabPanel>
                            <Experience />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default About;