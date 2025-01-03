"use client"
import React , {useTransition,useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        tittle: "Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node.js, Next.js</li>
                <li>HTML/CSS, Figma</li>
                <li>PostgreSQL, MongoDB</li>
                <li>Git, Docker</li>
                <li>Java, Python</li>
                <li>JavaScript</li>
                <li>React, Bootstrap, Flask</li>
            </ul>
        ),
    },
    {
        tittle: "Education",
        id: "education",
        content:(
            <ul className="list-disc pl-2">
                <li>Faculty of Science, Computer Science</li>
                <li>Chiang Mai University, THAILAND</li>
            </ul>
        ),
    },
    {
        tittle: "Certifications",
        id: "certifications",
        content:(
            <ul className="list-disc pl-2">
                <li></li>
                <li></li>
            </ul>
            ),
    },
];



const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg"> 
                        I am a frontend developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Node.js, PostgreSQL,
                        HTML/CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                            >
                                {" "}
                                Skills{" "}
                        </TabButton> 
                        <TabButton 
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                                {" "}
                                Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                            >
                                {" "}
                                Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default AboutSection;