import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks, deleteTask, toggleTaskCompletion } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={deleteTask}
          onToggleCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;