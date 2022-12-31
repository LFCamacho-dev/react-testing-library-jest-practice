import { render, screen } from '@testing-library/react';
import Header from '../Header'


describe("Header test", () => {
    
    it('Display TODO title on home page', () => {
        render(<Header title="Header"/>);
        const headingElement = screen.getByText(/header/i);
        expect(headingElement).toBeInTheDocument();
    });
    
})


// it('Display render heading', () => {
//   render(<Header title="Header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('Display render heading 3', () => {
//   render(<Header title="Header"/>);
//   const headingElement = screen.getByRole("heading", {name: "Header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('Display render heading by title', () => {
//   render(<Header />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('Display render heading by testID', () => {
//   render(<Header />);
//   const headingElement = screen.getByTestId("someid");
//   expect(headingElement).toBeInTheDocument();
// });

// it('find by ... Display TODO title on home page', async () => {
//     render(<Header title="Header"/>);
//     const headingElement =  await screen.findByText(/header/i);
//     expect(headingElement).toBeInTheDocument();
//   });

// it('query by ... Display TODO title on home page', async () => {
//     render(<Header title="Header"/>);
//     const headingElement =  screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });

// it('get all by ... Display TODO title on home page', async () => {
//     render(<Header title="Header"/>);
//     const headingElements =  screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
//   });