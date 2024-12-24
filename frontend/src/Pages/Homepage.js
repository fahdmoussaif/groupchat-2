// src/pages/HomePage.js
import React from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Welcome to Group Messaging App</Heading>
      <Text mt={4}>Connect and chat with your friends in real-time.</Text>
      <VStack spacing={4} mt={8}>
        <Link to="/login">
          <Button colorScheme="teal">Login</Button>
        </Link>
        <Link to="/register">
          <Button colorScheme="blue">Register</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default HomePage;
