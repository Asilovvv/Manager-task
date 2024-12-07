import { TaskProvider } from './assets/context/TaskContext';
import TaskList from './assets/components/TaskList';
import AddTask from './assets/components/AddTask';

function App() {
  return (
    <TaskProvider>
      <div>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;