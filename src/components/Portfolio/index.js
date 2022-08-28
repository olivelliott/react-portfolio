import React from "react";
import photo from "../../assets/ez-stream.png";

function Portfolio() {
  const projects = [
    {
      name: "Ez-Stream",
      description:
        "An application that shows the streaming services a tv show or movie is available on",
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

  function projectSelected() {
    console.log("hi");
  }

  return (
    <section>
      {projects.map((project) => (
        <div className="flex-row">
          <span onClick={projectSelected}>
            <h1 className="mx-1" key={project.name}>
              {project.name}
            </h1>
            <img
              src={photo}
              alt="Ez-Stream project example"
              className="img-thumbnail mx-1"
            />
          </span>
        </div>
      ))}
    </section>
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
