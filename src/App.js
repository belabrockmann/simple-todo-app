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
    }
    else {
      tasks = [];
    }
  }
  catch{
    tasks = [];
    localStorage.setItem("tasks", tasks);
  }
  const createNewTask = (e, newTask, props) => {
    e.preventDefault();
    tasks.push(newTask);
    localStorage.setItem("tasks", tasks);
  }

  const deleteTask = (task) => {
    tasks.splice(tasks.indexOf(task), 1);
    localStorage.setItem("tasks", tasks);
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
