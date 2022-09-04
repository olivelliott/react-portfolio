import { Box, Flex, Text, Heading, Center, Avatar } from "@chakra-ui/react";
import HeadShot from "../../assets/headshot.jpg";
import React from "react";
import { Helmet } from "react-helmet";

const About = () => (
  <Box as="section" bg="navy">
    <Helmet>
      <title>About Me</title>
      <image src="../../assets/icons/OE-1.png" />
    </Helmet>

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

        <Avatar
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
    </Box>
  </Box>
);

export default About;
