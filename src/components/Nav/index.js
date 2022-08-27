import React from 'react';
// import About from '../About'

function Nav() {
    // const {
    //     nav = [],
    //     setCurrentNav,
    //     currentNav
    // } = props;

    const categories = [
        { name: 'Portfolio' },
        { name: 'Contact' },
        { name: 'Resume' }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid='link' href='/'>
                    OLIVE
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about' data-testid='about'>
                            About
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li 
                            className='mx-2'
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Nav;