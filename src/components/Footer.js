import React from 'react';
import { Image, Flex } from '@chakra-ui/react'


function Footer() {
    const icons = [
        { name: 'github', alt: 'github icon', href:'https://github.com/olivelliott' },
        { name: 'linkedin', alt: 'linkedin icon', href:'https://www.linkedin.com/in/olivia-elliott-4a74a6128/'}
    ]
    return (
        <footer>
            <h1>Want to get connected? Check out my links!</h1>
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
            <h2>Olivia Elliott</h2>
            &copy; 2022
        </footer>
    )
}

export default Footer;