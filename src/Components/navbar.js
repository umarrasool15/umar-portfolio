import { Box, Button, Flex, Image, IconButton, Spacer, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box 
            bg={colorMode === 'light' ? 'brand.lightBackground' : 'brand.darkBackground'}
            color={colorMode === 'light' ? 'brand.lightText' : 'brand.darkText'}
            p={4}
        >
            <Flex alignItems="center">
                {/* Logo on the left */}
                <Image src="favicon.png" alt="Your Logo" boxSize="40px" />

                <Spacer />

                {/* Links */}
                <Link to="/about"><Button as="a" variant="link" mr="5">About</Button></Link>
                <Link to="/experience"><Button as="a" variant="link" mr="5">Experience</Button></Link>
                <Link to="/skills"><Button as="a" variant="link" mr="5">Skills</Button></Link>
                <Link to="/projects"><Button as="a" variant="link" mr="5">Projects</Button></Link>

                {/* Toggle Dark/Light Mode */}
                <IconButton 
                    mr="5"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                    onClick={toggleColorMode}
                    isRound="true"
                />
            </Flex>
        </Box>
    );
}

export default Navbar;
