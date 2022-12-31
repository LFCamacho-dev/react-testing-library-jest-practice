import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom';


describe('Test using a mock component', () => {

    /** Mock component in isolation */
    const MockTodoFooter = ({numberOfIncompleteTasks}) => {
        return (
            <BrowserRouter>
                <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
            </BrowserRouter>
        )
    }

    it('Should render the correct amount of incomplete tasks', async () => {
    render(
        <MockTodoFooter numberOfIncompleteTasks={5} />
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
    });

})

describe('Tests using {wrapper: }', () => {   

    it('Should render the correct amount of incomplete tasks', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={5} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
    });


    it('Should render "TASK"  when the number of incomplete tasks is one', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
    });

})

describe("TodoFooter extra tests", () => {


    it('Is truthy', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy()
    });


    it('Element should be visible to visitors', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible()
    });


    it('Contains given HTML', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toContainHTML('<a>')
    });


    it('Contains given text', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByRole("paragraph");
    expect(paragraphElement).toHaveTextContent('task left')
    });


    it('Contains given text, expected by assertion,', async () => {
    render(
        <TodoFooter numberOfIncompleteTasks={1} />, {wrapper:BrowserRouter}
    );
    const paragraphElement = screen.getByRole("paragraph");
    expect(paragraphElement.textContent).toBe('1 task left')
    });

})