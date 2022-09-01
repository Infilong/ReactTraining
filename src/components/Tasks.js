import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        //deleteTask step2: Tasks' onDelete is deleteTask function which is assigned to Task's onDelete
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Tasks;
