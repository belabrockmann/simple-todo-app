import React from 'react';
import { Link } from 'react-router-dom';
export default function Task(props) {
    const deleter = () => {
        props.deleteTask(props.description);
        props.setUpdater([props.description, Math.random()]);
    }
    return (
        <div className="task">
            <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="description-wrapper"><p className="description">{props.description}</p></div>
            <Link className="task-button edit" to={`/edit/${props.description}`}></Link>
            <div type="submit" className="task-button delete" onClick={deleter}></div>
        </div>
    );
}
