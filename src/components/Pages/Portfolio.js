import React from "react";
import { Box, Badge, Image, SimpleGrid, Center } from "@chakra-ui/react";
import ez from '../../assets/projects/ez-stream.png';
import budget from '../../assets/projects/budget-tracker.png';
import insomnia from '../../assets/projects/insomnia.png';
import social from '../../assets/projects/social-network.png';
import weather from '../../assets/projects/weather-dashboard.png';
import technicality from '../../assets/projects/technicality.png'

function Portfolio() {
  const projectArr = [
    {
      name: "Ez-Stream",
      description:
        "An application that shows the streaming services a tv show or movie is available on",
      deployedApp: "https://mlmcgeenc.github.io/group-2-project-one/",
      GitHub: "https://github.com/olivelliott/ez-stream",
      tech: "JS | API",
      imagePath: ez
    },
    {
      name: "Tech|nicality",
      description:
        "Tech blog site where developers can publish their blog posts and comment on other developers posts.",
      deployedApp: "https://technicality.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/tech-nicality",
      imagePath: technicality
    },
    {
      name: "Band Site",
      description:
        "A website that features a local band to allow fans to connect with one another and sign up for exclusive updates.",
      deployedApp: "https://band-site-22.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/project-2-band-site",
      imagePath: insomnia
    },
    {
      name: "Budget Tracker",
      description:
        "A budget tracker application that has been updated to allow for offline access and functionality so that the user can track withdrawals and deposits with or without a data/internet connection.",
      deployedApp: "https://budget-tracker-19-app.herokuapp.com/",
      GitHub: "https://github.com/olivelliott/budget-tracker",
      imagePath: budget
    },
    {
      name: "Social Network Api",
      description:
        "An API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
      deployedApp: "https://github.com/olivelliott/social-network-api",
      GitHub: "https://github.com/olivelliott/social-network-api",
      imagePath: social
    },
    {
      name: "Weather Dashboard",
      description:
        "An application that looks up the current weather conditions based on the location entered.",
      deployedApp: "https://olivelliott.github.io/weather-dashboard/",
      GitHub: "https://github.com/olivelliott/weather-dashboard",
      imagePath: weather
    },
  ];

  return (
    <SimpleGrid minChildWidth='300px' spacing={10} backgroundColor='navy' fontFamily='body'>
      {projectArr.map(({ name, deployedApp, GitHub, tech, imagePath }) => {
        return (
          <Center key={name}>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign='right' bg='white'>
            <Image 
              src={imagePath}
              objectFit='cover'
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" backgroundColor='orange'>
                  {name}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {tech}
                </Box>
              </Box>

              {/* <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {name}
              </Box>
 */}
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                <a href={deployedApp} target="_blank">
                  Site
                </a>
                <a href={GitHub} target="_blank">
                  GitHub
                </a>
              </Box>
            </Box>
          </Box>
          </Center>
        );
      })}
    </SimpleGrid>
  );
}

export default Portfolio;

// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// function Portfolio() {
//     return (
//         <Tabs>
//             <TabList>
//             <Tab>One</Tab>
//             <Tab>Two</Tab>
//             <Tab>Three</Tab>
//         </TabList>

//         <TabPanels>
//             <TabPanel>
//                 {/* <p>one!</p> */}
//                 <About/>
//             </TabPanel>
//             <TabPanel>
//                 <p>two!</p>
//             </TabPanel>
//             <TabPanel>
//                 <p>three!</p>
//             </TabPanel>
//             </TabPanels>
//         </Tabs>
//     )
// }

// https://chakra-ui.com/docs/components/tabs/usage
