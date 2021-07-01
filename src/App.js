import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
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

  // We passed the tasks array (which is a state) into the Tasks component

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;
