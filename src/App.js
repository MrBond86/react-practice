import { useState } from 'react';
import Tasks  from "./components/Tasks";
import Header from "./components/header";
import AddTask from "./components/AddTask";




function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks , setTasks] = useState([{
    id :  1,
    text :'Doctor visit',
    day : '5th jan',
    reminder : true,
  },
  {
    id :  2,
    text :'School visit',
    day : '10th jan',
    reminder : false,
  },
])
//Add Task
const addTask =(task) => {
  const id= Math.floor(Math.random() * 10000) +1
   const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }

//Delete task
const deleteTask= (id) => {
  setTasks(tasks.filter((task) =>task.id !==id ))
}
//toggle reminder
 const toggleReminder =(id) => {
  setTasks(
    tasks.map((task)=>
    task.id === id ? { ...task, reminder:
      !task.reminder} : task
    )
  )
 }
  return (
    <div className="container">
    <Header onAdd ={() => setShowAddTask(!showAddTask) } 
    showAdd = {showAddTask}/>
    {showAddTask && <AddTask  onAdd={addTask}/>}
    {tasks.length > 0 ?
    ( <Tasks tasks={tasks} onDelete= {deleteTask} 
       onToggle = {toggleReminder}/> )
    : (' No Tasks To Show')
    }
    </div>
   
  );
}

export default App;
