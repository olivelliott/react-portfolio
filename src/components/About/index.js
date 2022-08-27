import React from 'react';
import HeadShot from '../../assets/headshot.jpg';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function About() {
    return (
        <div>
            <section>
                <h1 id='about'>About Me</h1>
                <p>
                    Hello! My name is Olivia Elliott and I am a novice Full Stack Developer. I recently graduated
                    from the 24 week UNC Chapel Hill Full Stack Development program in September of 2022. In this intensive
                    class, I have learned many skills and aspire to continue my research and growth in my future career and
                    in side projects of my own. I have always had a desire to be able to find a career that will offer me the
                    ability to continue to grow and learn and I have found that place in the tech community. I am so excited
                    to strengthen my skills as a developer and contribute to this community of intellectual and like minded individuals.
                </p>
                <img src={HeadShot} className='my-2' style={{ width: '50%' }} alt='Head shot' />
            </section>
        </div>
    )
}

export default About;

