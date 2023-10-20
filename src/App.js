import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/navbar'; 
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import TerminalStart from './Components/Terminal';
import theme from './theme';

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
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<TerminalStart />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />

      </Routes>
    </div>
  );
}

export default App;
