import { Box, Container, Flex, Text, Spacer, Link } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box
            as="footer"
            bg="#070707" // Corrected the color code
            color="whiteAlpha.800"
            py="4"
            borderTop="1px" // Add a top border
            borderColor="whiteAlpha.300" // Choose a border color that is subtle
        >
            <Container maxW="container.xl">
                <Flex align="center" justify="space-between">
                    <Flex align="center" gap="4">
                        <Link href="/home" _hover={{ color: "whiteAlpha.900" }}>Home</Link>
                        <Link href="/experience" _hover={{ color: "whiteAlpha.900" }}>Experience</Link>
                        <Link href="/skills" _hover={{ color: "whiteAlpha.900" }}>Skills</Link>
                        <Link href="/projects" _hover={{ color: "whiteAlpha.900" }}>Projects</Link>
                    </Flex>
                    <Spacer />
                    <Text>© 2024 Umar Rasool. All rights reserved.</Text>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
