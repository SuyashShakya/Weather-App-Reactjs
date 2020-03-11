import React from 'react';
import ReactDom from 'react-dom';
import Weather from './Weather';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Weather></Weather>, div)
})

