import { useState } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName.trim()) {
      console.warn("Task cannot be empty.");
      return false;
    }

    const isDuplicate = tasks.some((task) => task.name.toLowerCase() === taskName.toLowerCase());
    if (isDuplicate) {
      console.warn("Task with this name already exists.");
      return false;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      { name: taskName.trim(), completed: false }
    ]);
    return true;
  };

  const deleteTask = (taskName) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.name.toLowerCase() !== taskName.toLowerCase())
    );
  };

  const toggleTaskCompletion = (taskName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.name.toLowerCase() === taskName.toLowerCase()
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};
