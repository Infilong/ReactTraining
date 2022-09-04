import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Test 1",
      day: "Jan 1st at 5:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Test 2",
      day: "Jan 2nd at 5:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Test 3",
      day: "Jan 3rd at 5:00pm",
      reminder: false,
    },
  ]);

  //Add Task function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  //Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        {/* deleteTask step1: onDelete is assigned deleteTask function */}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks"
        )}
      </div>
    </>
  );
};

export default App;
