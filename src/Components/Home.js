import { Flex, Text, Button, Image, useColorMode, Link } from '@chakra-ui/react';
import { FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="90vh"
            bg={colorMode === 'light' ? 'brand.lightBackground' : 'brand.darkBackground'}
            p="4"
        >
            <Flex alignItems="center" flexDirection="column">
                <Image
                    src="/umar.jpeg"
                    alt="Umar Rasool"
                    maxW="600px"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    borderRadius="12px"
                />
                <Text fontSize="3xl" fontWeight="bold" mt="5">Umar Rasool</Text>
                <Text textAlign="center" fontSize="md" mt="2">Developer</Text>
                <Text textAlign="center" fontSize="md">Lifelong Learner</Text>
                <Text textAlign="center" fontSize="md" mt="5">Seeking New Grad Roles.</Text>
                <Flex mt="6" gap="3">
                    <Link href="https://drive.google.com/file/d/15QF-olHjVSTMzmpkoVJ6znc45TUwk-tK/view?usp=sharing" isExternal>
                        <Button leftIcon={<FaFileDownload />} variant="outline" _hover={{ boxShadow: '0 0 0 3px #005B41', transition: 'boxShadow 0.2s' }}>
                            Resume
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/umarrasool" isExternal>
                        <Button leftIcon={<FaLinkedin />} variant="outline" _hover={{ boxShadow: '0 0 0 3px #005B41', transition: 'boxShadow 0.2s' }}>
                            LinkedIn
                        </Button>
                    </Link>
                    <Link href="https://www.github.com/umarrasool15" isExternal>
                        <Button leftIcon={<FaGithub />} variant="outline" _hover={{ boxShadow: '0 0 0 3px #005B41', transition: 'boxShadow 0.2s' }}>
                            Github
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Home;