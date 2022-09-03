import React from 'react';
import { Image, Center, Flex, Box } from '@chakra-ui/react'

function Resume() {
    const logos = [
        { name: 'html', alt: 'html logo'},
        { name: 'js', alt: 'js logo'},
        { name: 'css', alt: 'css logo'},
        { name: 'github', alt: 'github logo'},
        { name: 'mongodb', alt: 'mongodb logo'},
        { name: 'mysql', alt: 'mysql logo'},
        { name: 'node', alt: 'node logo'},
        { name: 'react', alt: 'react logo'}
    ]

    return (
        <Box as='section' backgroundColor='navy' mt={10} fontFamily='body'>
            <Center pt={5}>My Skills</Center>
        <Flex flexWrap='wrap'>
            {logos.map(({ name, alt}) => {
                return (
                    <Center>
                        <Image
                            src={require(`../../assets/icons/${name}.png`)}
                            alt={alt}
                            maxW='150px'
                            p={5}
                        ></Image>
                    </Center>
                )
            })}
        </Flex>
        </Box>
    )
}

export default Resume;