import React from "react";
import { Box, Badge, Image, Flex, Link, chakra } from "@chakra-ui/react";
import ez from "../../assets/projects/ez-stream.png";
import budget from "../../assets/projects/budget-tracker.png";
import insomnia from "../../assets/projects/insomnia.png";
import social from "../../assets/projects/social-network.png";
import weather from "../../assets/projects/weather-dashboard.png";
import technicality from "../../assets/projects/technicality.png";
import hmu from '../../assets/projects/hmu.png';
import { Helmet } from "react-helmet";

function Portfolio() {
  const projectArr = [
    {
      name: 'Hand-Me-Up',
      description: 'A clothing re-sale application with a purpose that reduces the stigma of accepting low-cost clothing. Sellers list their clothing for sale at a rate that just covers shipping. Buyers can shop from a selection of low-cost but trendy and modern clothing. Buyers have the option to make an additional donation to a partner charity of their choice when making a purchase.',
      deployedApp: "https://polar-chamber-11415.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/hand-me-up",
      tech: "React | MongoDB | Apollo | ChakraUI",
      imagePath: hmu
    },
    {
      name: "Ez-Stream",
      description:
        "An application that shows the streaming services a tv show or movie is available on",
      deployedApp: "https://mlmcgeenc.github.io/group-2-project-one/",
      GitHub: "https://github.com/olivelliott/ez-stream",
      tech: "JS | Server Side API",
      imagePath: ez,
    },
    {
      name: "Tech|nicality",
      description:
        "Tech blog site where developers can publish their blog posts and comment on other developers posts.",
      deployedApp: "https://technicality.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/tech-nicality",
      tech: "Node | MySql2 | Express",
      imagePath: technicality,
    },
    {
      name: "Band Site",
      description:
        "A website that features a local band to allow fans to connect with one another and sign up for exclusive updates.",
      deployedApp: "https://band-site-22.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/project-2-band-site",
      tech: "Node | Sequelize | GreenSock",
      imagePath: insomnia,
    },
    {
      name: "Budget Tracker",
      description:
        "A budget tracker application that has been updated to allow for offline access and functionality so that the user can track withdrawals and deposits with or without a data/internet connection.",
      deployedApp: "https://budget-tracker-19-app.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/budget-tracker",
      tech: "PWA",
      imagePath: budget,
    },
    {
      name: "Social Network Api",
      description:
        "An API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
      deployedApp: "https://github.com/olivelliott/social-network-api",
      GitHub: "https://github.com/olivelliott/social-network-api",
      tech: "Node | NoSQL | Jest",
      imagePath: social,
    },
    {
      name: "Weather Dashboard",
      description:
        "An application that looks up the current weather conditions based on the location entered.",
      deployedApp: "https://olivelliott.github.io/weather-dashboard/",
      GitHub: "https://github.com/olivelliott/weather-dashboard",
      tech: "JQuery | Server Side API",
      imagePath: weather,
    },
  ];

  return (
    <Flex
      bg="navy"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      {projectArr.map(
        ({ name, deployedApp, description, GitHub, tech, imagePath }) => {
          return (
            <Box
              m={5}
              bg="gray.800"
              _dark={{
                bg: "gray.800",
              }}
              mx={{
                lg: 8,
              }}
              display={{
                lg: "flex",
              }}
              maxW={{
                lg: "5xl",
              }}
              shadow={{
                lg: "lg",
              }}
              rounded={{
                lg: "lg",
              }}
            >
              <Box w={{ lg: "50%" }}>
                <Image
                  h={{ base: 64, lg: "full", md: "full", sm: "full" }}
                  rounded={{
                    lg: "lg",
                  }}
                  bgSize="cover"
                  src={imagePath}
                ></Image>
              </Box>

              <Box
                py={12}
                px={6}
                maxW={{
                  base: "xl",
                  lg: "5xl",
                }}
                w={{
                  lg: "50%",
                }}
              >
                <chakra.h2
                  fontSize={{
                    base: "2xl",
                    md: "3xl",
                  }}
                  color="white"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                >
                  {name}
                </chakra.h2>
                <Badge
                  borderRadius="full"
                  px="2"
                  backgroundColor="orange"
                  color="gray.800"
                >
                  {tech}
                </Badge>
                <chakra.p
                  mt={4}
                  color="white"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  {description}
                </chakra.p>

                <Box mt={8}>
                  <Link
                    as="a"
                    target="_blank"
                    href={GitHub}
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
                    GitHub
                  </Link>
                </Box>

                <Box mt={8}>
                  <Link
                    as="a"
                    target="_blank"
                    href={deployedApp}
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
                    Deployed App
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        }
      )}
    </Flex>
  );
}

export default Portfolio;
