import React from 'react';
import ReactDom from 'react-dom';
import Card from '../Card';

// import { render, getByTestId } from '@testing-library/react';
// import "jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Card></Card>, div)
})

// it("render button correctly", () => {
//     render(<Card  date={2020 / 03 / 11}></Card>)
//     expect(getByTestId('button')).toHaveTextContent("2020 / 03 / 11")
// })