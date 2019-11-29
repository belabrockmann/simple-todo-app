import React from 'react';
import { Logo, Tasks, EditTask, CreateTask } from './components';
import { Route, Switch } from 'react-router-dom';

import './App.css';
export default function App() {
  let tasks;
  try {
    tasks = localStorage.getItem("tasks");
    if (tasks.indexOf(",") !== -1) {
      tasks = tasks.split(",");
      console.log(tasks)
    }
    else {
      tasks = [];
    }
  }
  catch{
    tasks = [];
    localStorage.setItem("tasks", tasks);
  }
  const createNewTask = (e, newTask) => {
    e.preventDefault();
    tasks.push(newTask);
    localStorage.setItem("tasks", tasks);
  }
  const deleteTask = (task) => {
    console.log(tasks)
    tasks.splice(tasks.indexOf(task), 1);
    console.log(tasks.length)
    localStorage.setItem("tasks", tasks);
    console.log(localStorage)
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
