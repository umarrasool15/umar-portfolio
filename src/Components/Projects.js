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

const ProjectCard = ({ project }) => {
    // Define the background color for the badges
    const badgeBg = "#005B41"; // Custom green color
    const badgeColor = "white"; // Text color for the badges

    return (
        <Box
            position="relative"
            padding="20px"
            borderWidth="1px"
            borderRadius="8px"
            width={{ base: "100%", md: "calc(50% - 10px)" }}
            minWidth="250px"
            boxShadow="md"
            mb="4"
            mr={{ base: "0", md: "2" }}
            transition="all 0.2s ease-in-out"
            _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'xl',
                borderColor: '#005B41', 
            }}
        >
            <Image 
                src={project.image} 
                alt={project.title} 
                borderRadius="lg"
                _hover={{ opacity: 0.8 }} 
            />
            <VStack spacing={3} p="5" alignItems="start">
                <Text fontWeight="bold" fontSize="xl">
                    {project.title}
                </Text>
                <Text>
                    {project.description}
                </Text>
                <Flex wrap="wrap" gridGap="2">
                    {project.technologies.map((tech, index) => (
                        <Badge
                            key={index}
                            bg={badgeBg}
                            color={badgeColor}
                            px="2"
                            py="1"
                            borderRadius="full"
                            fontSize="0.8em" // Adjust font size as needed
                        >
                            {tech}
                        </Badge>
                    ))}
                </Flex>
                <Flex gridGap="3" mt="3">
                    <Link href={project.liveLink} isExternal>
                        <Button color="green">See Live</Button>
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
            <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap" justifyContent="space-between"> {/* Ensure wrapping and spacing */}
                {projectsList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </Flex>
        </Box>
    );
};
export default Projects;




