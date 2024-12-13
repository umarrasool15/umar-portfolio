import React, { useState, useCallback } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  VStack,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  useDisclosure,
  HStack,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const NavigationButton = ({ children, onClick, ...props }) => (
  <Button
    variant="ghost"
    bg="white"
    color="gray.800"
    size="sm"
    px={4}
    py={2}
    borderRadius="md"
    fontSize="sm"
    fontWeight="medium"
    _hover={{ bg: 'gray.100' }}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);

const Gallery = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const events = [
    {
      title: "My Motorcycle",
      description: "A look at my very first riding season.",
      images: [
        "/Gallery/Motorcycle/IMG_3669.jpeg",
        "/Gallery/Motorcycle/IMG_7614.JPG",
        "/Gallery/Motorcycle/IMG_7617.JPG",
        "/Gallery/Motorcycle/IMG_7622.JPG",
      ],
    },
    {
      title: "Mt. Tremblant",
      description: "A weekend getaway with friends.",
      images: [
        "/Gallery/Mt.Tremblant/IMG_6636.JPG",
        "/Gallery/Mt.Tremblant/IMG_6780.JPG",
        "/Gallery/Mt.Tremblant/IMG_7125.jpeg",
        "/Gallery/Mt.Tremblant/IMG_7480.jpeg",
        "/Gallery/Mt.Tremblant/IMG_7503.jpeg",
      ],
    },
    {
      title: "Camping in Killarney",
      description: "My first camping trip.",
      images: [
        "/Gallery/Killarney/IMG_3858.JPG",
        "/Gallery/Killarney/IMG_3865.JPG",
        "/Gallery/Killarney/IMG_2719.JPG",
        "/Gallery/Killarney/IMG_7499.jpeg",
      ],
    },
  ];

  const handleOpenModal = useCallback((event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    onOpen();
  }, [onOpen]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1
    );
  }, [selectedEvent]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === selectedEvent.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedEvent]);

  const handleKeyPress = useCallback((e) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        handlePrevImage();
        break;
      case 'ArrowRight':
        handleNextImage();
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  }, [isOpen, handlePrevImage, handleNextImage, onClose]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

 return (
    <Box maxW="1200px" mx="auto" p={{ base: "20px", md: "50px" }}>
      <Heading
        mb="8"
        textAlign="center"
        color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
      >
        Photo Gallery
      </Heading>
      
      <Grid
        templateColumns={{ 
          base: "1fr", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(3, 1fr)" 
        }}
        gap={6}
      >
        {events.map((event, index) => (
          <MotionGridItem
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            bg={colorMode === "light" ? "white" : "gray.800"}
            p="6"
            borderRadius="md"
            boxShadow="lg"
            onClick={() => handleOpenModal(event)}
            cursor="pointer"
            transition="all 0.2s"
          >
            <Box position="relative" overflow="hidden" borderRadius="md">
              <Image
                src={event.images[0]}
                alt={event.title}
                objectFit="cover"
                h="200px"
                w="100%"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </Box>
            
            <VStack align="start" spacing={2} mt={4}>
              <Heading size="md" color="brand.primary">
                {event.title}
              </Heading>
              <Text
                color={colorMode === "light" ? "gray.700" : "gray.400"}
                fontSize="sm"
              >
                {event.description}
              </Text>
              <Text
                color="gray.500"
                fontSize="xs"
              >
                {event.images.length} photos
              </Text>
            </VStack>
          </MotionGridItem>
        ))}
      </Grid>

      {selectedEvent && (
        <Modal 
          isOpen={isOpen} 
          onClose={onClose} 
          size="full"
          motionPreset="slideInBottom"
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
          <ModalContent
            bg="transparent"
            m={0}
            rounded={0}
          >
            <ModalBody p={0} position="relative">
              <IconButton
                position="absolute"
                top={4}
                right={4}
                aria-label="Close"
                icon={<CloseIcon />}
                onClick={onClose}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                zIndex={2}
              />
              
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minH="100vh"
                p={4}
                position="relative"
              >
                <Box
                  position="relative"
                  width="full"
                  maxW="1200px"
                  height="calc(100vh - 150px)"
                >
                  <Image
                    src={selectedEvent.images[currentImageIndex]}
                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                    objectFit="contain"
                    w="full"
                    h="full"
                  />
                  
                  <HStack
  position="absolute"
  bottom={4}
  left="50%"
  transform="translateX(-50%)"
  spacing={0}
  bg={colorMode === "light" ? "white" : "brand.darkCard"}
  borderRadius="full"
  overflow="hidden"
  height="32px"
>
  <Button
    variant="unstyled"
    height="full"
    px={3}
    fontSize="sm"
    onClick={handlePrevImage}
    color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
    _hover={{ bg: colorMode === "light" ? "gray.100" : "whiteAlpha.200" }}
  >
    Previous
  </Button>

  <Text
    px={2}
    fontSize="sm"
    height="full"
    display="flex"
    alignItems="center"
    color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
  >
    {currentImageIndex + 1} / {selectedEvent.images.length}
  </Text>

  <Button
    variant="unstyled"
    height="full"
    px={3}
    fontSize="sm"
    onClick={handleNextImage}
    color={colorMode === "light" ? "brand.lightText" : "brand.darkText"}
    _hover={{ bg: colorMode === "light" ? "gray.100" : "whiteAlpha.200" }}
  >
    Next
  </Button>
</HStack>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Gallery;