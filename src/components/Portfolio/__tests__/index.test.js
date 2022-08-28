import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '..';

const project =[ 
    { name: 'ez-stream', description: 'web application' }
]

afterEach(cleanup);

describe('Portfolio component', () => {
    it('renders without crashing', () => {
        render(<Portfolio />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Portfolio />);
        expect(asFragment()).toMatchSnapshot();
    })
});

