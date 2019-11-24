import React from 'react';
import { Logo, Tasks } from './components';
export default function App() {
  console.log("HELlo")
  let tasks = [
    {
      description: "My first task"
    },
    {
      description: "Task 2"
    }
  ]
  return (
    <>
      <Logo />
      <h1 className="title">Your tasks</h1>
      <Tasks tasks={tasks} />
    </>
  )
}
