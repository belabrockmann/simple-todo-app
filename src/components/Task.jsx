import React from 'react';
import { Link } from 'react-router-dom'
export default function Task(props) {
    return (
        <div className="task">
            <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="description-wrapper"><p className="description">{props.description}</p></div>
            <Link className="task-button edit" to={`/edit/${props.description}`}></Link>
            <div className="task-button delete"></div>
        </div>
    );
}
