import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

function AddTask() {
  const [taskInput, setTaskInput] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      setWarningMessage("Task cannot be empty!");
      return;
    }

    const taskAdded = addTask(taskInput);
    if (!taskAdded) {
      setWarningMessage("Task with this name already exists.");
    } else {
      setTaskInput('');
      setWarningMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {warningMessage && <p style={{ color: 'red' }}>{warningMessage}</p>}
    </div>
  );
}

export default AddTask;