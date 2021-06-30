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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
