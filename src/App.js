import React from 'react';
import { Logo, Tasks, EditTask, CreateTask } from './components';
import { Route, Switch } from 'react-router-dom';

import './App.css';
export default function App() {
  let tasks, taskStates;
  try {
    tasks = localStorage.getItem("tasks");
    taskStates = localStorage.getItem("taskStates");
    if (tasks.indexOf(",") !== -1) {
      tasks = tasks.split(",");
      taskStates = taskStates.split(",");
    }
    else {
      tasks = [];
      taskStates = [];
    }
  }
  catch{
    tasks = [];
    taskStates = [];
    localStorage.setItem("tasks", tasks);
    localStorage.setItem("taskStates", taskStates)
  }
  const createNewTask = (e, newTask, props) => {
    e.preventDefault();
    tasks.push(newTask);
    taskStates.push(0);
    localStorage.setItem("tasks", tasks);
    localStorage.setItem("taskStates", taskStates);
  }

  const deleteTask = (task) => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    taskStates.splice(index, 1);
    localStorage.setItem("tasks", tasks);
    localStorage.setItem("taskStates", taskStates);
  }
  return (
    <>
      <Logo />
      <Switch>
        <Route path="/edit/:desc" component={EditTask} />
        <Route path="/" exact>
          <Tasks deleteTask={deleteTask} />
        </Route>
        <Route path="/create/">
          <CreateTask createNewTask={createNewTask} />
        </Route>
      </Switch>
    </>
  )
}
