import React, { useState } from "react";
import { Skills, Education, Experience } from "../../components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import profile from "../../assets/profile.jpg"

const About = () => {
    const [index, setIndex] = useState(0);
    const activeStyle = "bg-teal-500 rounded-t-lg mr-1 h-8 w-24 flex justify-center items-center";
    const inactiveStyle = "bg-teal-600 rounded-t-lg mr-1 h-8 w-24 flex justify-center items-center";

    return (
        <div className="py-3 md:flex md:justify-between">
            <img className="h-auto w-9/12 mx-auto object-cover rounded-xl md:w-1/3 md:p-3 md:rounded-3xl" src={profile}/>

            <div className="md:w-2/3 md:p-3">
                <h3 className="py-3 text-3xl font-medium text-teal-700">About me</h3>

                <Tabs className="py-3 h-full" selectedIndex={index} onSelect={index => { setIndex(index); }}>
                    <TabList className="flex justify-left text-center align-bottom">
                        <Tab className={index === 0 ? activeStyle : inactiveStyle}>Skills</Tab>
                        <Tab className={index === 1 ? activeStyle : inactiveStyle}>Education</Tab>
                        <Tab className={index === 2 ? activeStyle : inactiveStyle}>Experience</Tab>
                    </TabList>

                    <div className="border border-1 border-teal-500 rounded-b-xl rounded-tr-xl p-3">
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