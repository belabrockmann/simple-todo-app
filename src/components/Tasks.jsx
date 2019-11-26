import React from 'react';
import Task from './Task';
export default function Tasks(props) {
    return (
        <div className="tasks">
            <h2 className="title">Your tasks</h2>
            {props.tasks.map((item, index) => (<Task key={index} description={item.description} />))}
        </div>
    );
};
