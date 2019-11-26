import React from 'react';
import { Logo, Tasks, EditTask } from './components';
import { Route } from 'react-router-dom';

import './App.css';
export default function App() {
  let tasks = [
    {
      description: "My first task"
    },
    {
      description: "Task 2"
    },
    {
      description: "The ultimate task that's gonna break everything"
    },
    {
      description: "Another task"
    },
    {
      description: "The beautiful task number 5"
    },
    {
      description: "And another one!"
    }
  ]
  return (
    <>
      <Logo />
      <Route path="/edit/:desc">
        <EditTask />
      </Route>
      <Route path="/" exact>
        <Tasks tasks={tasks} />
      </Route>
    </>
  )
}
