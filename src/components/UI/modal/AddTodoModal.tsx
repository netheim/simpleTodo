import classes from './AddTodoModal.module.css'
import {FC, useState} from "react";
import {TAddTodoModal} from "../../../types/types.ts";
import {Button, Input} from "antd";

const AddTodoModal: FC<TAddTodoModal> = ({isActive, setActiveModal, setTodos}) => {
    const [task, setTask] = useState('')
    const addTask = (event) => {
        event.preventDefault()
        if (task) {
            setTodos(prevState => [...prevState, {
                id: prevState.length ? prevState.slice(-1)[0].id + 1: 1,
                title: task,
                isCompleted: false
            }])
            setActiveModal(false)
            setTask('')
        } else {
            alert('Введите название!')
        }
    }

    return (
        <div className={isActive ? classes.modalActive: classes.modalInactive} onClick={() => setActiveModal(false)}>
            <div className={classes.modalInner} onClick={(event) => event.stopPropagation()}>
                <h1 className={classes.modalTitle}>Введите название задачи</h1>
                <Input value={task} className={classes.modalInput} onChange={(event) => setTask(event.target.value)}/>
                <Button type={'default'} onClick={addTask}>Добавить</Button>
            </div>
        </div>
    );
};

export default AddTodoModal;