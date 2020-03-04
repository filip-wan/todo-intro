import React, { createContext, useState } from 'react';

const TasksContext = createContext([]);

export const TasksProvider = props => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks') || []));

    const saveTasks = tasks => {
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = taskText => {
        const newId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
        saveTasks([...tasks, { id: newId, text: taskText, checked: false }]);
    };

    const removeTask = taskId => {
        saveTasks(tasks.filter(t => t.id !== taskId));
    };

    const taskChecked = (taskId, checked) => {
        saveTasks(tasks.map(t => (t.id === taskId ? { ...t, checked: checked } : t)));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask, taskChecked }}>
            {props.children}
        </TasksContext.Provider>
    );
};

export const TasksConsumer = TasksContext.Consumer;
export default TasksContext;
