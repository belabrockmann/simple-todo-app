import React from 'react';

export default function Task(props) {
    return (
        <div className="task">
            <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="description-wrapper"><p className="description">{props.description}</p></div>
            <div className="task-button edit"></div>
            <div className="task-button delete"></div>
        </div>
    );
};
