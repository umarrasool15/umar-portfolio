import { Box, Icon, Text, VStack, HStack } from "@chakra-ui/react";

const SkillCard = ({ icon, title, description, details }) => {
  return (
    <Box
      padding="20px"
      borderWidth="1px"
      borderRadius="8px"
      width="100%"
      boxShadow="md"
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
