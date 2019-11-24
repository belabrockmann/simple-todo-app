import React from 'react';
import Task from './Task';
export default function Tasks(props) {
    console.log("Tasks")
    return (
        <div className="tasks">
            {props.tasks.map((item, index) => (<Task key={index} description={item.description} />))}
        </div>
    );
};
