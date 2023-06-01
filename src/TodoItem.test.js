import { render, screen } from "@testing-library/react"
import TodoItem from "./TodoItem"

describe("The Todo Item component", () => {
    test("renders the task's name and a button to delete the task", () => {
        const exampleTask = "Steam grout in bathroom"

        render(<TodoItem task={exampleTask} />)

        const taskElement = screen.getByText(exampleTask);
        const buttonElement = screen.getByRole('button', { name: /Delete/i });

        expect(taskElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
    test("adds a new taks to TODO list"), () => {
        render(<TodoItem />)

        const inputElement = screen.getByPlaceHolderText(/Add a new take here.../i);
        const buttonElement = screen.getByRole('button', { name: /Add to List/i });

        fireEvent.change(inputElement, { target: { value: "Take Out Trash" } })
        fireEvent.click(buttonEvent,)

    }

})
