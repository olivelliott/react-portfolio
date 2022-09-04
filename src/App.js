import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer'
import theme from './theme'


const App = () => 
  <ChakraProvider theme={theme}>
    <PortfolioContainer/>
    <Footer  />
  </ChakraProvider>;
export default App;