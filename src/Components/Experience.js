import React, { useState } from "react";
import { Box, Flex, Text, Heading, VStack, List, ListItem, ListIcon, useColorMode } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Experience = () => {
    const [activeJob, setActiveJob] = useState(0);
    const { colorMode } = useColorMode();

    const jobs = [
        {
            company: "RBC",
            role: "Software Engineer Intern",
            date: "Jan 2024 - Present",
            responsibilities: [
                "Utilized RedHat Ansible and Python to build automation playbooks to automate repetitive internal application maintenance routines",
                "Planned and designed new ServiceNow API architectural integration to ensure use-case compatibility for various departmental site reliability requirements",
                "Worked with senior engineers to automate creation of current state architecture blueprints for 66 applications to comply with OFSI bill B-13",
            ],
        },
        {
            company: "Thales",
            role: "Software Engineer Intern",
            date: "Sep 2023 - Dec 2023",
            responsibilities: [
                "Utilized HTML, CSS, Django, and Python to build D-SPICO web-app for train safety monitoring and testing, participating in both front-end and back-end development",
                "Worked with senior engineers to modify current D-SPICO application to adapt to requirements for Wayside Train Monitoring System",
                "Documented and validated the compatibility and testing procedures between D-SPICO software and onboard train hardware, ensuring the safe and reliable operation of trains",
            ],
        },
        {
            company: "AGE-WELL",
            role: "Web Developer, RA",
            date: "Mar 2023 - Present",
            responsibilities: [
                "Web development for responsive website using HTML and CSS hosted on WordPress, incorporating design elements and accessibility features for an intuitive user experience",
                "Conducted research and managed a Microsoft Access Database consisting of research, key stakeholders, and contributors to the project",
                "Worked collaboratively with the Principal Investigators and research staff to develop content and manage the social media strategy and postings for the Cog@Work Research Project",
            ],
        },
        {
            company: "Wilfrid Laurier University",
            role: "AVIT Student Support Intern",
            date: "Sep 2022 - Aug 2023",
            responsibilities: [
                "Led campus wide internal website and database restructure, to aid professors and faculty in getting acquainted with new or upgraded classroom spaces, including tutorials on how to use specialized technology and equipment for over 104 unique classrooms",
                "Provided operational support on current PC operating systems (Windows 10 / 11 and MAC OS), troubleshooting and resolving software-related issues for desktop application packages including using PowerShell/DOS scripting to automate responses to general customer inquiries",
                "Assisted with network closet cable management, sorting, testing, and maintaining connections to ensure smooth networking operations on university campus",
            ],
        },
    ];

    return (
        <Box maxW="1200px" mx="auto" p={{ base: "20px", md: "50px" }}>
            <Heading
                mb={{ base: "30px", md: "50px" }}
                textAlign="center"
                color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
            >
                My Work Experience
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} gap="40px">
                <VStack flex="1" spacing={4} align="stretch">
                    {jobs.map((job, index) => (
                        <Box
                            key={index}
                            p="12px"
                            borderRadius="8px"
                            bg={activeJob === index ? "rgb(242, 255, 250)" : "transparent"}
                            borderLeftWidth="4px"
                            borderLeftColor={activeJob === index ? "brand.primary" : "transparent"}
                            _hover={{
                                bg: colorMode === "light" ? "gray.100" : "gray.700",
                                cursor: "pointer",
                            }}
                            onClick={() => setActiveJob(index)}
                        >
                            <Text
                                fontSize="lg"
                                fontWeight={activeJob === index ? "bold" : "normal"}
                                color={activeJob === index ? "brand.primary" : "inherit"}
                            >
                                {job.company}
                            </Text>
                        </Box>
                    ))}
                </VStack>
                <Box
                    flex="2"
                    bg={colorMode === "light" ? "white" : "gray.800"}
                    p="24px"
                    borderRadius="12px"
                    boxShadow="md"
                    color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
                >
                    <Text fontSize="xl" fontWeight="bold" color="brand.primary">
                        {jobs[activeJob].role}
                    </Text>
                    <Text fontSize="md" mb="4">{jobs[activeJob].date}</Text>
                    <Box mt="4" pl="4">
                        <List spacing={3}>
                            {jobs[activeJob].responsibilities.map((resp, index) => (
                                <ListItem
                                    key={index}
                                    fontSize="md"
                                    lineHeight="1.8"
                                    ml="4"
                                    position="relative"
                                >
                                    <ListIcon
                                        as={CheckCircleIcon}
                                        color="brand.primary"
                                        position="absolute"
                                        left="-24px"
                                        top="4px"
                                    />
                                    <Box as="span">{resp}</Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Experience;