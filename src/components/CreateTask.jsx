import React, { useState } from 'react'

export default function CreateTask(props) {
    const [newTask, setNewTask] = useState("");
    const onClickHandler = e => {
        if (newTask.length) {
            props.createNewTask(e, newTask);
            setNewTask("")
        }
    };
    return (
        <div className="create-task">
            <h2 className="title">Create new task</h2>
            <form className="task-description-form">
                <label htmlFor="task-description-input" className="task-description-input-label">Task description</label>
                <input type="text" className="task-description-input" id="task-description-input" onChange={e => { setNewTask(e.target.value) }} value={newTask} required={true} />
                <button className="btn btn-submit" onClick={onClickHandler}>Create task</button>
            </form>
        </div>
    )
}
