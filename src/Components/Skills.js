import {
    Box,
    Flex,
    Text,
    Heading,
    Icon,
    VStack
} from "@chakra-ui/react";
import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa"; 

const SkillCard = ({ icon, title, description, details }) => {
    return (
        <Box
            padding="20px"
            borderWidth="1px"
            borderRadius="8px"
            width="100%"
            boxShadow="md"
            _hover={{
                boxShadow: '0 0 0 3px teal', 
                transition: 'boxShadow 0.2s' 
            }}
        >
            <VStack spacing={3} alignItems="start">
                <Icon as={icon} boxSize={8} />
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
            <Heading marginBottom="50px">My Technical Knowledge</Heading>
            <Flex direction={{ base: "column", md: "row" }} gap="50px">
                <SkillCard
                    icon={FaCode}
                    title="Languages"
                    details={["Python", "Java", "C", "PowerShell", "SQL", "HTML/CSS", "JavaScript", "VBA"]}
                />
                <SkillCard
                    icon={FaLayerGroup}
                    title="Frameworks"
                    details={["Linux", "React", "NodeJS", "Django", "Flask", "Selenium", "Git", "Firebase", "Kibana", "WordPress"]}
                />
                <SkillCard
                    icon={FaTools}
                    title="Programs and Applications"
                    details={["VS Code", "Android Studio", "XCode", "Eclipse", "MySQL DBMS"]}
                />
            </Flex>
        </Box>
    );
};

export default Skills;
