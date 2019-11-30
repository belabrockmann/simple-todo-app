import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Task(props) {
    const [isTaskDisabled, setIsTaskDisabled] = useState(false);
    const deleter = () => {
        props.deleteTask(props.description);
        props.setUpdater([props.description, Math.random()]);
    }
    const disableTask = e => {
        setIsTaskDisabled(prevState => !prevState);
    }
    return (
        <div className={isTaskDisabled ? "task task-disabled" : "task"}>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" onClick={disableTask} />
            </div>
            <div className="description-wrapper"><p className="description">{props.description}</p></div>
            <Link className="task-button edit" to={`/edit/${props.description}`}></Link>
            <div type="submit" className="task-button delete" onClick={deleter}></div>
        </div>
    );
}
