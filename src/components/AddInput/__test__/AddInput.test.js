import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import AddInput from '../AddInput'

/** Mock empty function */
const mockedSetTodoFn = jest.fn()

describe("Input tests", () => {
    
    it('Should render input element', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodoFn}
                />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument()
    })
    
    it('fireEvent:change - Should be able to type in input field', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodoFn}
                />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement,{ target: { value: "Grocery Shopping"} })
        expect(inputElement.value).toBe("Grocery Shopping")
    })

    it('fireEvent:input - Should be able to type in input field', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodoFn}
                />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.input(inputElement,{ target: { value: "Grocery Shopping"} })
        expect(inputElement.value).toBe("Grocery Shopping")
    })
    
    test("fireEvent: renders an empty input field when 'add' button is clicked", async () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodoFn}
                />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', { name: /Add/i})
        await fireEvent.change(inputElement, "Adding something")    
        await fireEvent.click(buttonElement)    
        expect(inputElement.value).toBe("")
    
    })
    
    test("userEvent: renders an empty input field when 'add' button is clicked", async () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodoFn}
                />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', { name: /Add/i})
        await userEvent.type(inputElement, "Some text")    
        await userEvent.click(buttonElement)    
        expect(inputElement.value).toBe("")
    
    })
    





})