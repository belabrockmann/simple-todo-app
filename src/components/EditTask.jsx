import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
export default withRouter(function EditTask(props) {
    const [taskDescription, setTaskDescription] = useState(props.match.params.desc);

    const updateTask = e => {
        e.preventDefault();
        let tasks = localStorage.getItem("tasks").split(",");
        let index = tasks.indexOf(props.match.params.desc);
        if (tasks.indexOf(taskDescription) === -1) {
            tasks[index] = taskDescription;
            localStorage.setItem("tasks", tasks);
            props.history.push("/");
        }
    }
    return (
        <div className="edit-task">
            <h2 className="title">Edit task</h2>
            <form className="task-description-form">
                <label htmlFor="task-description-input" className="task-description-input-label">Task Description</label>
                <input type="text" id="task-description-input" className="task-description-input" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder="Enter description here..." autoFocus={true} />
                <button type="submit" className="btn btn-submit" onClick={updateTask}>Save changes</button>
            </form>
        </div>
    )
})
