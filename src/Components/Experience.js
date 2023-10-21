import React, { useState } from 'react';
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0); 

    const jobs = [
        {
            company: "Thales",
            role: "Software Engineer Intern @ Thales",
            date: "Sep 2023 - Present",
            responsibilities: [
                "Utilized HTML, CSS, Django, and Python to build D-SPICO web-app for train safety monitoring and testing, participating in both front-end and back-end development",
                "Worked with senior engineers to modify current D-SPICO application to adapt to requirements for Wayside Train Monitoring System",
                "Documented and validated the compatibility and testing procedures between D-SPICO software and onboard train hardware, ensuring the safe and reliable operation of trains"
            ]
        },
        {
            company: "AGE-WELL",
            role: "Web Developer, RA @ AGE-WELL",
            date: "Mar 2023 - Present",
            responsibilities: [
                "Web development for responsive website using HTML and CSS hosted on WordPress, incorporating design elements and accessibility features for an intuitive user experience",
                "Conducted research and managed a Microsoft Access Database consisting of research, key stakeholders, and contributors to the project",
                "Worked collaboratively with the Principal Investigators and research staff to develop content and manage the social media strategy and postings for the Cog@Work Research Project"
            ]
        },
        {
            company: "Wilfrid Laurier University",
            role: "AVIT Student Support Intern @ WLU",
            date: "Sep 2022 - Aug 2023",
            responsibilities: [
                "Led campus wide internal website and database restructure, to aid professors and faculty in getting acquainted with new or upgraded classroom spaces, including tutorials on how to use specialized technology and equipment for over 104 unique classrooms",
                "Provided operational support on current PC operating systems (Windows 10 / 11 and MAC OS), troubleshooting and resolving software-related issues for desktop application packages including using PowerShell/DOS scripting to automate responses to general customer inquiries",
                "Assisted with network closet cable management, sorting, testing, and maintaining connections to ensure smooth networking operations on university campus"
            ]
        },
    ];

    return (
        <Box maxWidth="1200px" margin="0 auto" padding="50px" p={{ base: "20px", md: "50px" }}>
            <Heading marginBottom={{ base: "30px", md: "50px" }}>My Work Experience</Heading>
            
            <Flex direction={{ base: "column", md: "row" }} gap="20px">
                <Box flex="1">
                    {jobs.map((job, index) => (
                        <Box 
                            key={index} 
                            marginBottom="10px" 
                            paddingLeft="10px" 
                            borderLeft={activeJob === index ? "4px solid teal" : "4px solid transparent"} 
                        >
                            <Text
                                fontSize="lg"
                                fontWeight={activeJob === index ? 'bold' : 'normal'}
                                cursor="pointer"
                                color={activeJob === index ? 'teal' : 'inherit'} 
                                onClick={() => setActiveJob(index)}
                            >
                                {job.company}
                            </Text>
                        </Box>
                    ))}
                </Box>

                <Box flex="2" mt={{ base: "20px", md: "0" }} marginLeft={{ md: "50px" }}>
                    <Text fontSize="xl" fontWeight="bold" color="teal">{jobs[activeJob].role}</Text>
                    <Text>{jobs[activeJob].date}</Text>
                    <Box marginTop="20px">
                        {jobs[activeJob].responsibilities.map((resp, index) => (
                            <Text key={index} marginBottom="10px">• {resp}</Text>
                        ))}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Experience;
