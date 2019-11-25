import React from 'react';
import { Logo, Tasks } from './components';
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
      <h2 className="title">Your tasks</h2>
      <Tasks tasks={tasks} />
    </>
  )
}
