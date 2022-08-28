import React, { useState } from "react";
import "../App.css";
import Nav from "./Nav";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from './Pages/Contact'

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('About');

    const Page = () => {
        switch(currentPage) {
            case 'About' : return <About />
            case 'Portfolio' : return <Portfolio />
            default: return <Contact />
        }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {<Page />}
      </div>
    );
  
}

