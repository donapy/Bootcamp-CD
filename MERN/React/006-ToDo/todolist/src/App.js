import "./App.css";
import React, { useState } from "react";
import TodoTask from "./TodoTask";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const newTask = { taskName: task, completed: false };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const deleteTask = (taskNameToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const completeTask = (taskNameToUpdate) => {
    setTodoList(
      todoList.filter((task) => {
        if (task.taskName === taskNameToUpdate) {
          task.completed = true;
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
        <hr />
      </div>
      <div>
        {todoList.map((task, key) => {
          return (
            <TodoTask
              key={key}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
