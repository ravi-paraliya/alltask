import React, { useState } from 'react'

function TodoList() {
const [task,setTask] = useState([])
const [value,setValue] = useState('')


function handleAddTask(index){
    if (value.trim() === '') return;
    setTask([...task, value]);
    setValue('');
  };

function handleRemoveTask(index){
    const newTasks = task.filter((_,item) => item !== index); 
    setTask(newTasks);
};
  return (
    <div className='d-flex justify-content-center'>
      <div>
      <h1>To-Do List</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  placeholder="Add a new task"/>
      <button className='btn btn-success py-1 mx-2' onClick={handleAddTask}>Add Task</button>
      <ul >
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button className='btn btn-danger py-1 m-2' onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default TodoList
