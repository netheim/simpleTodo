
import classes from "../assets/styles/Todo.module.css";
import {Button} from "antd";
import {TCompletedTodo} from "../types/types.ts";
import {FC} from "react";
import {CheckOutlined} from "@ant-design/icons";

const CompletedTodo: FC<TCompletedTodo> = ({title, deleteTask, completedTodo}) => {
    return (
        <div className={classes.todo}>
            <div className={classes.todoTask}>
                <CheckOutlined />
                <h2 className={classes.todoTitleCompleted}>{title}</h2>
            </div>
            <Button type={'default'} onClick={() => deleteTask(completedTodo)}>DELETE</Button>

        </div>
    );
};

export default CompletedTodo;