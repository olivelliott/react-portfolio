import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  Image,
  useColorModeValue,
  Heading,
  Center,
} from "@chakra-ui/react";
import HeadShot from "../../assets/headshot.jpg";
import React from "react";

const About = () => (
  <Box as="section" bg="navy">
    <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <Center>
          <Heading
            fontFamily="header"
            bg="navy"
            color="orange"
            pb={8}
            fontSize="5rem"
          >
            Nice to meet you!
          </Heading>
        </Center>

        <Image
          src={HeadShot}
          mx="auto"
          objectFit="cover"
          rounded="full"
          boxSize="250px"
        />
        <Box mt="3">
          <Text as="cite" fontStyle="normal" fontWeight="bold" color="white">
            Olivia Elliott
          </Text>
          <Text fontSize="sm" color="gray.400">
            Full Stack Developer
          </Text>
        </Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          mt="6"
          color="yellow"
        >
          &ldquo;I am a budding Full Stack Developer recently graduated from the
          UNC Chapel Hill Full Stack Development program in September of 2022.
          In this intensive class, I have learned many skills and aspire to
          continue my research and growth in my future career and projects. I
          have always had a desire to find a career that will offer me the
          ability to continuously learn new skills and I have found that place
          in the tech community. I am so excited to strengthen my skills as a
          developer and contribute to this community of intellectual and like
          minded individuals.&rdquo;
        </Text>
      </Flex>
      <HStack
        justify="center"
        spacing="4"
        mt="8"
        color={useColorModeValue("gray.300", "gray.600")}
      >
        <Circle size="3" bg="blue.500" />
        <Circle size="2" bg="currentColor" />
        <Circle size="2" bg="currentColor" />
      </HStack>
    </Box>
  </Box>
);

export default About;
