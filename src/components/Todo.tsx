import classes from '../assets/styles/Todo.module.css'
import {Button, Checkbox, CheckboxProps} from "antd";
import {FC, useState} from "react";
import {TTodo} from "../types/types.ts";

const Todo: FC<TTodo> = ({todos, setTodos, title, deleteTask, todo, setCompletedTodos}) => {
    const [isActive, setIsActive] = useState(true)


    const onChange: CheckboxProps['onChange'] = () => {

        if (isActive) {

            const copy = [...todos]
            const current = copy.find(t => t.id === todo.id)
            current.isCompleted = !current.isCompleted;
            setCompletedTodos(prevState => [...prevState, current])
            setTodos(copy)
            setIsActive(false)
        }
        else {
            const copy = [...todos]
            const current = copy.find(t => t.id === todo.id)
            current.isCompleted = !current.isCompleted;
            setCompletedTodos(prevState => prevState.filter(t => t != current))

            setIsActive(true)
        }

    };

    return (
        <div className={classes.todo}>
            <div className={classes.todoTask}>
                <Checkbox

                    onChange={onChange}
                    style={{transform: "scale(2)"}}

                />
                <h2 className={isActive ? classes.todoTitleActive : classes.todoTitleCompleted}>{title}</h2>
            </div>
            <Button type={'default'} onClick={() => deleteTask(todo)}>DELETE</Button>

        </div>
    );
};

export default Todo;