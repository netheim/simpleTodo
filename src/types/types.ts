
export type TTodos = {
    title: string,
}

export type TTodo = {
    todo: object,
    todos: object[],
    setTodos:  (value: (((prevState: object[]) => object[]) | object[])) => void,
    completedTodos: object[],
    setCompletedTodos: (value: (((prevState: object[]) => object[]) | object[])) => void,
    title: string,
    deleteTask: (task: object) => object
}

export type TCompletedTodo = {
    completedTodo: object,
    title: string,
    deleteTask: (task: object) => void
}

export type TAddTodoModal = {
    isActive: boolean
    setActiveModal:  (value: (((prevState: boolean) => boolean) | boolean)) => void,
    setTodos:  (value: (((prevState: object[]) => object[]) | object[])) => void,
}