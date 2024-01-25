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
            width={{ base: "100%", md: "50%" }}
            minWidth="250px"
            maxWidth={{ base: "100%", md: "calc(50% - 10px)" }}
            boxShadow="md"
            mb="4"
            mr={{ base: "0", md: isEven ? "0" : "4" }}
            _hover={{
                width: { base: "100%", md: "100%" },
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
            title: "Leetr | Fullstack",
            description: "Leetr is an application that provides a clean dashboard for your Leetcode stats, as well as SMS reminders to keep you on track. Users are encouraged to use our corresponding Chrome extension that collects additional information about their Leetcode sessions, and helps users improve overtime.",
            technologies: ["React", "HTML", "CSS", "ExpressJS", "NodeJS","MongoDB", "Infobip API"],
            image: "/dashboard.jpeg",
            liveLink: "https://github.com/Rayaan-khan428/leetr",
            githubLink: "https://github.com/Rayaan-khan428/leetr",
        },
        {
            title: "Huberman AI | Fullstack",
            description: "Huberman AI is a GPT powered chatbot that allows users to ask health and lifestyle related questions. It is trained using the transcripts of Dr. Andrew Huberman's medical podcast.",
            technologies: ["React", "CSS", "Python", "Flask", "OpenAI","ChakraUI"],
            image: "/hubermanai.png",
            liveLink: "https://hubermanai.tech",
            githubLink: "https://github.com/Rayaan-khan428/huberman-ai",
        },
        {
            title: "Research2Slides | Fullstack",
            description: "Developed a RESTful API that transforms research papers into PowerPoints with summarized content and attractive layouts, saving users significant time and improving summary accuracy through context clue recognition.",
            technologies: ["Java", "Spring Boot", "React", "Apache POI","Cohere"],
            image: "/research2slides.png",
            liveLink: "https://research2-slides-front-pb1jbmyl5-rayaan-khan428.vercel.app/",
            githubLink: "https://github.com/Rayaan-khan428/Research2SlidesWebApp",
        },
    ];

    return (
        <Box maxWidth="1200px" margin="0 auto" padding="50px" p={{ base: "20px", md: "50px" }}>
            <Heading marginBottom={{ base: "30px", md: "50px" }}>My Projects</Heading>
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




