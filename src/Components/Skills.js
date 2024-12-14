import {
    Box,
    Flex,
    Text,
    Heading,
    Icon,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";
import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa"; 

const boxStyles = {
    padding: "20px",
    borderWidth: "1px",
    borderRadius: "8px",
    width: "100%",
    boxShadow: "md",
    transition: "boxShadow 0.2s",
    _hover: {
        boxShadow: "0 0 0 3px #005B41",
    },
};

const SkillCard = ({ icon, title, description, details, boxStyles }) => {
    return (
        <Box
            padding="20px"
            borderWidth="1px"
            borderRadius="8px"
            width="100%"
            boxShadow="md"
            borderColor="transparent" 
            transition="all 0.3s ease"
            _hover={{
                borderColor: "#005B41", 
                boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.5)", 
            }}
        >
            <VStack spacing={3} alignItems="start">
                <Icon as={icon} boxSize={8} color="#005B41" />
                <Text fontWeight="bold" fontSize="xl">
                    {title}
                </Text>
                <Text>{description}</Text>
                <VStack alignItems="start" spacing={1}>
                    {details.map((detail, index) => (
                        <Text key={index}>{detail}</Text>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
};



const Skills = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto" padding="50px">
            <Heading marginBottom="50px" textAlign="center">My Technical Knowledge</Heading>
            <Flex direction={{ base: "column", md: "row" }} gap="20px">
                <SkillCard
                    icon={FaCode}
                    title="Languages"
                    description="Proficient in various programming languages."
                    details={["Python", "Java", "C", "PowerShell", "SQL", "JavaScript", "VBA"]}
                />
                <SkillCard
                    icon={FaLayerGroup}
                    title="Frameworks"
                    description="Experienced in popular frameworks and tools."
                    details={["Linux", "React", "NodeJS", "Django", "Flask", "Ansible", "Selenium", "Git", "Firebase", "Kibana"]}
                />
                <SkillCard
                    icon={FaTools}
                    title="Software"
                    description="Familiar with development and design software."
                    details={["GCP", "Docker", "CI/CD", "Kubernetes", "Jupyter Notebook", "Splunk", "Postman"]}
                />
            </Flex>
        </Box>
    );
};

export default Skills;
