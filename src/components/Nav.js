import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const pageNames = ['About', 'Portfolio', 'Contact', 'Resume'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'navy',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navigation({ currentPage, handlePageChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

    const determineActiveClass = (pageName) =>
    `${currentPage === pageName ? 'red' : ''}`;
    // `nav-link ${currentPage === pageName ? "active" : ""}`;

  return (
    <>
      <Box bg='navy' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
              {pageNames.map((link) => (
                <Link
                as='a'
                href={`#${link}`}
                onClick={() => handlePageChange(link)}
                color='white'
                px={3}
                py={3}
                fontWeight='semibold'
                rounded='md'
                _hover={{
                  bg: 'orange',
                  color: 'white',
                  textDecoration: 'none'
                }}
                >{link}</Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {pageNames.map((link) => (
                <Link 
                // key={`#${link}`}
                
                as='a'
                href={`#${link}`}
                onClick={() => handlePageChange(link)}
                
                >{link}</Link>

              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}



















// import React from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel, Link } from '@chakra-ui/react'


// function Nav({ currentPage, handlePageChange }) {

//   const determineActiveClass = (pageName) =>
//     `nav-link ${currentPage === pageName ? "active" : ""}`;

//   const pageNames = ["About", "Portfolio", "Contact", 'Resume'];

//   return (
//     <Tabs align='end' variant='soft-rounded' colorScheme='orange' bg='navy' fontFamily='body'>
//       <TabList>
//       {pageNames.map((name) => {
//         return (
//           <Tab className="nav-item" key={name}>
//             <Link
//                                 as="a"
//                                 onClick={() => handlePageChange(name)}
//                                 href={`#${name}`}
//                                 // bg="orange"
//                                 color="gray.100"
//                                 px={5}
//                                 py={3}
//                                 fontWeight="semibold"
//                                 rounded="lg"
//                                 _hover={{
//                                   bg: "white",
//                                   color: "orange",
//                                   textDecoration: "none",
//                                 }}
//                                 _active={{
//                                   bg: 'red'
//                                 }}
//                                 className={determineActiveClass(currentPage, name)}

//             >{name}</Link>
//             <a
//               href={`#${name}`}
//               onClick={() => handlePageChange(name)}
//               className={determineActiveClass(currentPage, name)}
//             >
//               {name}
//             </a>
//           </Tab>
//         );
//       })}
//       </TabList>
//     </Tabs>
//     // <ul className="nav nav-tabs">
//     // </ul>
//   );
// }

// export default Nav;
