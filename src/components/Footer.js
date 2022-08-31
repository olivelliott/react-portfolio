import React from 'react';
import { Image, Flex, Box, Heading } from '@chakra-ui/react'


function Footer() {
    const icons = [
        { name: 'github', alt: 'github icon', href:'https://github.com/olivelliott' },
        { name: 'linkedin', alt: 'linkedin icon', href:'https://www.linkedin.com/in/olivia-elliott-4a74a6128/'}
    ]
    return (
        <Box backgroundColor='navy' fontFamily='body' color='yellow'>
            <Heading>Let's get connected!</Heading>
            <Flex>
                {icons.map(({name, alt, href}) => {
                    return (
                        <a href={href} target='_blank' rel='noopener noreferrer'>
                            <Image
                                src={require(`../assets/icons/${name}.png`)}
                                alt={alt}
                                maxW='100px'
                            ></Image>
                        </a>
                    )
                })}
            </Flex>
            <Box>Olivia Elliott</Box>
            &copy; 2022
        </Box>
    )
}

export default Footer;