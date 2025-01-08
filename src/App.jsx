import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programaçao",
      Description: "Estudar programaçao para se tornar um desenvovedor",
      isCompleted: false,
    },
    {
      id: 2,
      title: "estudar ingles",
      Description: "Estudar programaçao para se tornar um desenvovedor",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskid) {
    const newTask = tasks.map((task) => {
      if (task.id == taskid) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTask);
  }

  function onTaskDelete(taskid) {
    const newTask = tasks.filter((task) => task.id != taskid);

    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de trarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}
export default App;
