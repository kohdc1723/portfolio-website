import React, { useState } from "react";
import { Skills, Education, Experience } from "../../components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import profile from "../../assets/profile.jpg"

const About = () => {
    const [index, setIndex] = useState(0);
    const activeStyle = "text-teal-700 font-bold mr-3 w-24 flex justify-center items-center border-b-4 border-teal-700";
    const inactiveStyle = "text-teal-700 font-medium mr-3 w-24 flex justify-center items-center";

    return (
        <div>
            <div className="relative mx-auto my-3 w-96 h-96 rounded-full overflow-hidden">
                <img src={profile} alt="profile" className="object-cover" />
            </div>

            <div>
                <h3 className="py-3 text-3xl font-medium text-teal-700">About me</h3>

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