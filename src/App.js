import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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

  //Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete",id)
  };

  return (
    <>
      <div className="container">
        <Header title={"Header propTypes string example"} />
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
};

export default App;
