import classes from '../assets/styles/Todos.module.css'
import {FC, useState} from "react";
import {TTodos} from "../types/types.ts";
import Todo from "./Todo.tsx";
import AddTodoModal from "./UI/modal/AddTodoModal.tsx";
import {Button, Tabs, TabsProps} from "antd";
import CompletedTodo from "./CompletedTodo.tsx";
import completedTodo from "./CompletedTodo.tsx";


const Todos: FC<TTodos> = ({title}) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Task 1',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Task 2',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Task 3',
            isCompleted: false
        },
    ])
    const [completedTodos, setCompletedTodos] = useState([{
        id: 0,
        title: '',
        isCompleted: true
    }])

    const deleteTask = (task) => {
        setTodos(prevState => prevState.filter(t => t.id != task.id))


    }
    const deleteCompletedTask = (completedTask) => {
        setCompletedTodos(prevState => prevState.filter(t => t.id === completedTask.id))
    }

    // const deleteCompletedTask = (task) => {
    //     setTodos(prevState => prevState.filter(t => t.id != task.id))
    //     setCompletedTodos(prevState => prevState.filter(t => t.id === task.id))
    // }
    const items: TabsProps[object[]] = [
        {
            key: '1',
            label: 'Активные',
            children: todos.map((todo) =>
                    <div key={todo.id}>
                        <Todo
                            deleteTask={deleteTask}
                            todo={todo} todos={todos}
                            setTodos={() => setTodos}
                            completedTodos={completedTodos}
                            setCompletedTodos={setCompletedTodos}
                            title={todo.title}
                        />
                    </div>
                ),
        },
        {
            key: '2',
            label: 'Завершенные',
            children: completedTodos.slice(1).map((todo) =>
                <CompletedTodo
                    deleteTask={deleteCompletedTask}
                    completedTodo={completedTodo}
                    title={todo.title}
                />
            ),
        },
        {
            key: '3',
            label: 'Все',
            children: 'Content of Tab Pane 3',
        },
    ];
    const [activeModal, setActiveModal] = useState<boolean>(false)


    const openModal = () => {
        setActiveModal(true)
    }

    return (
        <div className={classes.todos}>
            <h1 className={classes.title}>{title}</h1>

            <div className={classes.todoTable}>
                <Tabs defaultActiveKey="1" centered items={items} />

            </div>
            {/*<div className={classes.todoTab}>*/}

            {/*</div>*/}
            <div className={classes.todoInfo}>
                <div>
                    Осталось задач: {[...todos].filter(item => !item.isCompleted).length}
                </div>
                <Button type={'default'} onClick={openModal}>Добавить задачу</Button>
            </div>
            <AddTodoModal isActive={activeModal} setActiveModal={setActiveModal} setTodos={setTodos}/>
        </div>
    );
};

export default Todos;