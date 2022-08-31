import { useState } from "react";

const Tasks = () => {
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
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
