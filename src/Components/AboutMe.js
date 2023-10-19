import { Flex, Text, Button, Image, useColorMode, Link } from '@chakra-ui/react';
import { FaFileDownload, FaLinkedin, FaGithub} from 'react-icons/fa';

const AboutMe = () => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="full"
            height="90vh"
            bg={colorMode === 'light' ? 'brand.lightBackground' : 'brand.darkBackground'}
            padding="6"
        >
            <Flex alignItems="center" flexDirection="column">
                <Image
                    borderRadius="full"
                    boxSize="300px"
                    src="/umar.jpeg"
                    alt="Umar Rasool"
                    mb="4"
                />
                <Text fontSize="3xl" fontWeight="bold">Umar Rasool</Text>
                <Text textAlign="center" fontSize="md" mt="2">Aspiring Developer.</Text>
                <Text textAlign="center" fontSize="md" mt="2">Lifelong Learner.</Text>
                <Text textAlign="center" fontSize="md" mt="7">Seeking Internships for Winter 2024 / Summer 2024.</Text>

                <Flex mt="6" gridGap="3">
                    <Link href="/Umar_Rasool_Resume.pdf" download>
                        <Button 
                            leftIcon={<FaFileDownload />} 
                            variant="outline"
                            _hover={{
                                boxShadow: '0 0 0 3px teal',
                                transition: 'boxShadow 0.2s'
                            }}
                        >
                            Resume
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/umarrasool" isExternal>
                        <Button 
                            leftIcon={<FaLinkedin />} 
                            variant="outline"
                            _hover={{
                                boxShadow: '0 0 0 3px teal',
                                transition: 'boxShadow 0.2s'
                            }}
                        >
                            LinkedIn
                        </Button>
                    </Link>
                    <Link href="https://www.github.com/umarrasool15" isExternal>
                        <Button 
                            leftIcon={<FaGithub />} 
                            variant="outline"
                            _hover={{
                                boxShadow: '0 0 0 3px teal',
                                transition: 'boxShadow 0.2s'
                            }}
                        >
                            Github
                        </Button>
                    </Link>
                    
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutMe;