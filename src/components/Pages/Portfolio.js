import React, { useState } from "react";
// import projects from '../../assets/projects/ez-stream.png'
import photo from '../../assets/projects/ez-stream.png'

function Portfolio() {
  const projectArr = [
    {
      name: "Ez-Stream",
      description:
        "An application that shows the streaming services a tv show or movie is available on",
      deployedApp: 'https://mlmcgeenc.github.io/group-2-project-one/',
      github: 'https://github.com/olivelliott/ez-stream'
    },
    {
      name: "Tech|nicality",
      description:
        "Tech blog site where developers can publish their blog posts and comment on other developers posts.",
    },
    {
      name: "Band Site",
      description:
        "A website that features a local band to allow fans to connect with one another and sign up for exclusive updates.",
    },
    {
      name: "Budget Tracker",
      description:
        "A budget tracker application that has been updated to allow for offline access and functionality so that the user can track withdrawals and deposits with or without a data/internet connection.",
    },
    {
      name: "Social Network Api",
      description:
        "An API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    },
    {
      name: "Employee Tracker",
      description:
        "An application that allows a business owner to organize and keep track of the departments, roles, and employees in their company.",
    },
  ];

  return (
    <ul className='project-list'>
      {projectArr.map(({name, deployedApp, github}) => {
        return (
          <li className='project-item'>
            <p>{name}</p>
            <a
              href={deployedApp}
              target="_blank">Deployed App
            </a>
            <a
              href={github}
              target="_blank">GitHub</a>
          </li>
        )
      })}
    </ul>
  )
};

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
