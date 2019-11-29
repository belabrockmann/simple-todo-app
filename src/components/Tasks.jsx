import React, { useState } from 'react';
import Task from './Task';
export default function Tasks(props) {
    let tasks;
    try {
        tasks = localStorage.getItem("tasks");
        if (tasks.indexOf(",") !== -1 || tasks.length) {
            tasks = tasks.split(",");
            console.log(tasks)
        }
        else {
            tasks = [];
            console.log("WHHHYY")
        }
    }
    catch{
        console.log("What")
        tasks = [];
        localStorage.setItem("tasks", tasks);
    }
    // eslint-disable-next-line
    const [updater, setUpdater] = useState([]);
    console.log(tasks)
    return (
        <div className="tasks">
            <h2 className="title">Your tasks</h2>
            {tasks.length ? tasks.map((item, index) => (<Task key={index} description={item} deleteTask={props.deleteTask} setUpdater={setUpdater} />)) : <h3>You don't have any tasks</h3>}
        </div>
    );
};
