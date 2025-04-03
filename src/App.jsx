import React, { useState, createContext } from 'react';
import './App.css';
import TaskViewer from './components/task-container/TaskViewer';

const data = [
  {
    id: 'T-1',
    name: 'Create a design system for enum workspace.',
    status: 'Todo',
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: 'T-2',
    name: 'Create a design system for enum workspace.',
    status: 'In Progress',
    dueDate: new Date(2022, 7, 24),
  },
  {
    id: 'T-3',
    name: 'Create a design system for enum workspace.',
    status: 'Completed',
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: 'T-4',
    name: 'Create a design system for enum workspace.',
    status: 'Completed',
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: 'T-5',
    name: 'Create a design system for enum workspace.',
    status: 'Completed',
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: 'T-6',
    name: 'Create a design system for enum workspace.',
    status: 'Pending',
    dueDate: new Date(2022, 6, 13),
  },
];

export const TodoContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: 'T-' + prevState.length + 1,
      },
    ]);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <TodoContext.Provider value={taskList}>
          <TaskViewer onNewTaskAdd={onNewTaskAdd} taskList={taskList} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
