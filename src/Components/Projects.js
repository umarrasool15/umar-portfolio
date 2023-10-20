import {
    Box,
    Image,
    Text,
    Flex,
    Button,
    Badge,
    VStack,
    Heading,
    Link,
} from '@chakra-ui/react';

import { useState } from 'react';

const ProjectCard = ({ project, isEven }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            position="relative"
            padding="20px"
            borderWidth="1px"
            borderRadius="8px"
            width="50%"
            minWidth="250px"
            maxWidth="calc(50% - 10px)"
            boxShadow="md"
            mb="4"
            mr={isEven ? "0" : "4"}
            _hover={{
                width: "100%",
                zIndex: 10,
                transition: 'width 0.25s'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && <Image src={project.image} alt={project.title} />}
            <VStack spacing={3} p="5" alignItems="start">
                <Text fontWeight="bold" fontSize="xl">
                    {project.title}
                </Text>
                <Text>{project.description}</Text>
                <Flex wrap="wrap" gridGap="2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} colorScheme="teal">
                            {tech}
                        </Badge>
                    ))}
                </Flex>
                <Flex gridGap="3" mt="3">
                    <Link href={project.liveLink} isExternal>
                        <Button colorScheme="blue">See Live</Button>
                    </Link>
                    <Link href={project.githubLink} isExternal>
                        <Button variant="outline">Source Code</Button>
                    </Link>
                </Flex>
            </VStack>
        </Box>
    );
};


const Projects = () => {
    const projectsList = [
        {
            title: "Huberman AI | Fullstack",
            description: "Huberman AI is a GPT powered chatbot that allows users to ask health and lifestyle related questions. It is trained using the transcripts of Dr. Andrew Huberman's medical podcast.",
            technologies: ["React", "CSS", "Python", "Flask", "OpenAI","ChakraUI"],
            image: "/hubermanai.png",
            liveLink: "https://hubermanai.tech",
            githubLink: "https://github.com/Rayaan-khan428/huberman-ai",
        },
        {
            title: "InAFlash | Fullstack",
            description: "InAFlash is an intuitive online study tool that creates unique flashcards and quizzes based on user prompts. It uses Co:Here’s Natural Language Processing API.",
            technologies: ["HTML", "CSS", "JavaScript", "Node.js","Cohere"],
            image: "/inaflash.png",
            liveLink: "https://github.com/apeman-alt/InAFlash",
            githubLink: "https://github.com/apeman-alt/InAFlash",
        },
        {
            title: "Portfolio | Frontend",
            description: "Personal portfolio website created with fully functional responsive elements and animations including light/dark mode, router, and elements from ChakraUI.",
            technologies: ["React", "CSS", "ChakraUI"],
            image: "/portfolio.png",
            liveLink: "https://umarrasool.dev",
            githubLink: "https://github.com/umarrasool15/umar-portfolio",
        },
    ];

    return (
        <Box maxWidth="1200px" margin="0 auto" padding="50px" p={{ base: "20px", md: "50px" }}>
            <Heading marginBottom="50px">My Projects</Heading>
            <Flex direction={{ base: "column", md: "row" }} gap="20px">
                {projectsList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isEven={index % 2 === 0}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;