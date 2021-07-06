import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // showAddTask state will keep track of whether to display the form for adding tasks
  const [showAddTask, setShowAddTask] = useState(false);

  // tasks state keeps track of the tasks created
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 10th at 11:00am",
      reminder: true,
    },
    {
      id: 2,
      text: "Council Meeting",
      day: "Feb 25th at 2:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Watch Son's School Play",
      day: "Feb 28th at 8:00am",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    // create an id based on the last tasks id, but make sure there is a task in the list first
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    // const id = tasks.length + 1;

    console.log(`new id: ${id}`);

    const newTask = { id, ...task };

    // Add the task to the tasks state
    // Uses the spread operator to keep the original tasks values and then add newTask to the end
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    // Filter out/remove the task whose id matches the parameter, keep the remaining // // ones.
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("toggled reminder");
  };

  // Toggle Add Task form
  const toggleAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  // We passed the tasks array (which is a state) into the Tasks component.

  // && is a shorter way of a ternary operator (?) that return nothing if false.
  // Sooooo the && in he code below is used to check if showAddTask is true, if it is
  // it will show the AddTask component.
  return (
    <div className="container">
      <Header onAdd={toggleAddTaskForm} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;
