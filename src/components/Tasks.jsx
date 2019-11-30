import React, { useState } from 'react';
import Task from './Task';
import { Link } from 'react-router-dom';
export default function Tasks(props) {
    let tasks;
    try {
        tasks = localStorage.getItem("tasks");
        if (tasks.indexOf(",") !== -1 || tasks.length) {
            tasks = tasks.split(",");
        }
        else {
            tasks = [];
        }
    }
    catch{
        tasks = [];
        localStorage.setItem("tasks", tasks);
    }
    // eslint-disable-next-line
    const [updater, setUpdater] = useState([]);
    return (
        <div className="tasks">
            <h2 className="title">Your tasks</h2>
            <div className="tasks">
                {tasks.length ? tasks.map((item, index) => (<Task key={index} description={item} deleteTask={props.deleteTask} setUpdater={setUpdater} />)) : <h3>You don't have any tasks</h3>}
            </div>
            <div className="new-task">
                <p className="create-new-task-text">Add new task</p>
                <Link to="/create" className="btn create-new-task-button">+</Link>
            </div>
        </div>
    );
};
