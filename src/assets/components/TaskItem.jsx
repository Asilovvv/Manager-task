function TaskItem({ task, onDelete, onToggleCompletion }) {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
        <button onClick={() => onToggleCompletion(task.name)}>
          {task.completed ? 'Done' : 'Mark as Done'}
        </button>
        <button onClick={() => onDelete(task.name)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;
  