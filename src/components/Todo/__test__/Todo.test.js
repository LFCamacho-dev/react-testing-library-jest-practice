import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom';


describe("Todo Component Integration Tests", () => {
    
    test('Render input field and button', async () => {
        render(
            <Todo />, {wrapper:BrowserRouter}
        )
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('Render test that was passed in input field after pressing "Add" button', async () => {
        render(
            <Todo />, {wrapper:BrowserRouter}
        )
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Text to add"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Text to add/i)
        expect(divElement).toBeInTheDocument()
    });

    test('An item is added to the page after typing inside the input, and pressing the "Add" button', async () => {
        const { container } = render(
            <Todo />, {wrapper:BrowserRouter}
        )
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Text to add"}})
        fireEvent.click(buttonElement)
        expect(container.querySelector('.todo-item')).toBeInTheDocument()
    });


    describe('Adding multiple tasks',() => { 

        const addTasks = (tasks) => {
            const inputElement = screen.getByPlaceholderText("Add a new task here...");
            const buttonElement = screen.getByRole("button", {name: /Add/i})
            tasks.forEach(task => {
                fireEvent.change(inputElement, { target: { value: task}})
                fireEvent.click(buttonElement)
            });
        }        
        
        /** Using querySelectorAll */
        test('Check 3 elements are rendered after adding 3 items using the form using querySelectorAll', async () => {
            const { container } = render(
                <Todo />, {wrapper:BrowserRouter}
                )
                addTasks(['dummy text 1', 'dummy text 2', 'dummy text 3'])
                expect(container.querySelectorAll('.todo-item').length).toBe(3)
        });

        /** Using getAllByTestId*/
        test('Check 3 elements are rendered after adding 3 items using the form using TestId', async () => {
            render(
                <Todo />, {wrapper:BrowserRouter}
            )
            addTasks(['dummy text 1', 'dummy text 2', 'dummy text 3'])
            const divElement = screen.getAllByTestId('task-item-container')
            expect(divElement.length).toBe(3)
        });

    })

    test('Task should not have completed class when initially rendered', async () => {
        render(
            <Todo />, {wrapper:BrowserRouter}
        )
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Text to add"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Text to add/i)
        expect(divElement).not.toHaveClass('todo-item-active')
    });

    test('Task should have completed class when clicked', async () => {
        render(
            <Todo />, {wrapper:BrowserRouter}
        )
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Text to add"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Text to add/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
    });
    
})