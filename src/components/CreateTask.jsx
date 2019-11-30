import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
export default withRouter(function CreateTask(props) {
    const [newTask, setNewTask] = useState("");
    const tasks = localStorage.getItem("tasks").split(",");
    const onClickHandler = e => {
        e.preventDefault();
        if (newTask.length && tasks.indexOf(newTask) === -1) {
            props.createNewTask(e, newTask);
            setNewTask("")
            props.history.push("/")
        }
    };
    return (
        <div className="create-task">
            <h2 className="title">Create new task</h2>
            <form className="task-description-form">
                <label htmlFor="task-description-input" className="task-description-input-label">Task description</label>
                <input type="text" className="task-description-input" id="task-description-input" onChange={e => { setNewTask(e.target.value) }} value={newTask} required={true} autoFocus={true} />
                <button className="btn btn-submit" onClick={onClickHandler}>Create task</button>
            </form>
        </div>
    )
})
