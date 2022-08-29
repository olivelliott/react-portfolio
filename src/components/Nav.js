import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Nav({ currentPage, handlePageChange }) {

  const determineActiveClass = (pageName) =>
    `nav-link ${currentPage === pageName ? "active" : ""}`;

  const pageNames = ["About", "Portfolio", "Contact", 'Resume'];

  return (
    <Tabs align='end' variant='soft-rounded' colorScheme='green'>
      <TabList>
      {pageNames.map((name) => {
        return (
          <Tab className="nav-item" key={name}>
            <a
              href={`#${name}`}
              onClick={() => handlePageChange(name)}
              className={determineActiveClass(currentPage, name)}
            >
              {name}
            </a>
          </Tab>
        );
      })}
      </TabList>
    </Tabs>
    // <ul className="nav nav-tabs">
    // </ul>
  );
}

export default Nav;
