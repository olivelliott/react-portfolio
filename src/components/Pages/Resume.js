import React from "react";
import { Helmet } from "react-helmet";
import { Image, Center, Flex, Box, Heading, Link } from "@chakra-ui/react";

function Resume() {
  const logos = [
    { name: "html", alt: "html logo" },
    { name: "js", alt: "js logo" },
    { name: "css", alt: "css logo" },
    { name: "github", alt: "github logo" },
    { name: "mongodb", alt: "mongodb logo" },
    { name: "mysql", alt: "mysql logo" },
    { name: "node", alt: "node logo" },
    { name: "react", alt: "react logo" },
  ];

  return (
    <Box as="section" bg="navy">
      <Helmet>
        <title>Resume</title>
      </Helmet>

      <Box maxW="3xl" mx="auto" pt="12" pb="16">
        <Flex direction="column" align="center" textAlign="center">
          <Center>
            <Heading
              fontFamily="header"
              bg="navy"
              color="white"
              pb={8}
              fontSize="4rem"
            >
              My Skills
            </Heading>
          </Center>

          <Center>
            <Flex flexWrap="wrap">
              {logos.map(({ name, alt }) => {
                return (
                  <Image
                    src={require(`../../assets/icons/${name}.png`)}
                    alt={alt}
                    maxW="150px"
                    p={5}
                  ></Image>
                );
              })}
            </Flex>
          </Center>

          <Center>
            <Box mt={8}>
              <Heading
                fontFamily="header"
                bg="navy"
                color="white"
                pb={8}
                fontSize="4rem"
                mt="7rem"
              >
                Resume
              </Heading>

              <Link
                as="a"
                target="_blank"
                href="../../assets/Olivia-Elliott-Resume.pdf"
                download
                bg="orange"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "white",
                  color: "orange",
                  textDecoration: "none",
                }}
              >
                Download PDF
              </Link>
            </Box>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}

export default Resume;
