import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Navbar from './Components/navbar'; 
import Home from './Components/Home';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import TerminalStart from './Components/Terminal';
import Footer from './Components/footer';
import theme from './theme';
import Gallery from './Components/Gallery';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <RoutesWithNavbar />
      </BrowserRouter>
    </ChakraProvider>
  );
}


  function RoutesWithNavbar() {
    return (
      <Flex flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1">
          <Routes>
              <Route path="/" element={<TerminalStart />} />
              <Route path="/home" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
        <Footer />
      </Flex>
    );
  }

export default App;
