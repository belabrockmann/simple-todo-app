import React, { useState } from 'react'
export default function EditTask(props) {
    const [taskDescription, setTaskDescription] = useState(props.match.params.desc);
    return (
        <div className="edit-task">
            <h2 className="title">Edit task</h2>
            <form className="task-description-form">
                <label htmlFor="task-description-input" className="task-description-input-label">Task Description</label>
                <input type="text" id="task-description-input" className="task-description-input" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder="Enter description here..." />
                <button type="submit" className="btn btn-submit">Save changes</button>
            </form>
        </div>
    )
}
