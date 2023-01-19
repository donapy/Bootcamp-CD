import React from "react";

const TodoTask = ({ task, deleteTask, completeTask }) => {
  return (
    <div>
      <span
        style={
          task.completed === true
            ? { color: "green", textDecoration: "line-through" }
            : { color: "black" }
        }
      >
        {task.taskName}
      </span>
      {/* <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Completed
      </button> */}
      <input
        type="checkbox"
        name="taskCompleted"
        value="taskCompleted"
        checked={task.completed}
        onChange={() => completeTask(task.taskName)}
      />
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
