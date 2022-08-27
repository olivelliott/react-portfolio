import React from 'react';
import photo from '../../assets/ez-stream.png';

function Portfolio() {

    const currentProject = {
        name: 'Ez-Stream',
        description: 'An application that shows the streaming services a tv show or movie is available on'
    }

    return (
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.name}</p>
            <div className='flex-row'>
                <img 
                    src={photo}
                    alt='Ez-Stream project example'
                    className='img-thumbnail mx-1' 
                />
            </div>
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
