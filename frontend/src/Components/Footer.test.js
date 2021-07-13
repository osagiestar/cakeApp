import {render} from "@testing-library/react";
import Footer from './Footer';
import React from 'react';

test("inspect the footer", () => {
const {getByText} = render(<Footer />);
const h5 = getByText(/osagiestar concepts/);
expect(h5).toHaveTextContent("osagiestar concepts");
})