import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Task(props) {
    const tasks = localStorage.getItem("tasks").split(",");
    const index = tasks.indexOf(props.description);
    const taskStates = localStorage.getItem("taskStates").split(",");
    const taskState = Number(taskStates[index]);
    const [isTaskDisabled, setIsTaskDisabled] = useState(taskState);
    const deleter = () => {
        props.deleteTask(props.description);
        props.setUpdater([props.description, Math.random()]);
    }
    const disableTask = e => {
        taskStates[index] = (taskState + 1) % 2;
        setIsTaskDisabled(prevState => (prevState + 1) % 2);
        localStorage.setItem("taskStates", taskStates);
    }
    return (
        <div className={isTaskDisabled ? "task task-disabled" : "task"}>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" onChange={disableTask} checked={isTaskDisabled} />
            </div>
            <div className="description-wrapper"><p className="description">{props.description}</p></div>
            <Link className="task-button edit" to={`/edit/${props.description}`}></Link>
            <div type="submit" className="task-button delete" onClick={deleter}></div>
        </div>
    );
}
