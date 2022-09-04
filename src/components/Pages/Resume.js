// import React, { useState } from 'react';
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,
//   Center,
//   Image,
//   Flex,
//   Avatar,
//   Wrap,
//   WrapItem
// } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// function Resume() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = useState(`<Slider | null>(null)`);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   // This list contains all the data for carousels
//   // This can be static or loaded from a server
//   const cards = [
//     {
//       title: 'My Skills',
//       text:
//         "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     },
//     {
//       title: 'Resume',
//       text:
//         "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
//     },
//   ];

//   const logos = [
//     { name: 'html', alt: 'html logo'},
//     { name: 'js', alt: 'js logo'},
//     { name: 'css', alt: 'css logo'},
//     { name: 'github', alt: 'github logo'},
//     { name: 'mongodb', alt: 'mongodb logo'},
//     { name: 'mysql', alt: 'mysql logo'},
//     { name: 'node', alt: 'node logo'},
//     { name: 'react', alt: 'react logo'}
// ]

//   return (
//     <Box
//       position={'relative'}
//       height={'600px'}
//       width={'full'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt size="40px" />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>

//           <Box
//           as='section'
//             key='0'
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             bg='navy'
//             >
//             {/* This is the block you need to change, to customize the caption */}
//             <Container size="container.lg" height="600px" position="relative">
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)"
//                 >
//                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//                   My Skills
//                 </Heading>
//                 <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
//                 <Wrap spacing='10px' justify='center' wrap='wrap'>

//                {logos.map(({ name, alt}) => {
//                 return (
//                     <Container>

//                     <Center>
//                         <WrapItem>
//                         <Avatar
//                             src={require(`../../assets/icons/${name}.png`)}
//                             alt={alt}
//                             maxW='50px'
//                         ></Avatar>
//                         </WrapItem>

//                     </Center>
//                     </Container>

//                 )
//             })}
//                                 </Wrap>

//                 </Text>
//               </Stack>
//             </Container>
//           </Box>

//           <Box
//             key='1'
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url($)`}>
//             {/* This is the block you need to change, to customize the caption */}
//             <Container size="container.lg" height="600px" position="relative">
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)">
//                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//                   MAEWls
//                 </Heading>
//                 <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
//                   blahadsf
//                 </Text>
//               </Stack>
//             </Container>
//           </Box>

//       </Slider>
//     </Box>
//   );
// }

// export default Resume;

import React from "react";
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
                href="https://docs.google.com/document/d/10WSUNgzm6tAKv1VXxTmOi1B8UYn99l5XzhJPwMEivyg/edit?usp=sharing"
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
                View
              </Link>
            </Box>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}

export default Resume;
