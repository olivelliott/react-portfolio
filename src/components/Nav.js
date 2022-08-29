import React from "react";

function Nav({ currentPage, handlePageChange }) {

  const determineActiveClass = (pageName) =>
    `nav-link ${currentPage === pageName ? "active" : ""}`;

  const pageNames = ["About", "Portfolio", "Contact"];

  return (
    <ul className="nav nav-tabs">
      {pageNames.map((name) => {
        return (
          <li className="nav-item" key={name}>
            <a
              href={`#${name}`}
              onClick={() => handlePageChange(name)}
              className={determineActiveClass(currentPage, name)}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
