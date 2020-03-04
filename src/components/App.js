import React from 'react';
import ToDoList from './ToDoList';
import TasksContext, { TasksProvider } from '../contexts/TasksContext';

function App() {
    return (
        <TasksProvider>
            <ToDoList />
        </TasksProvider>
    );
}

export default App;
