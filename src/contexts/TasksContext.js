import React, { createContext, useState } from 'react';

const TasksContext = createContext([]);

export const TasksProvider = props => {
    const [tasks, setTasks] = useState([
        { id: 0, text: 'Do laundry', checked: false },
        { id: 1, text: 'Do dishes', checked: true },
        { id: 2, text: 'Run a lot', checked: false }
    ]);

    const addTask = taskText => {
        const newId = tasks[tasks.length - 1].id + 1;
        setTasks([...tasks, { id: newId, text: taskText, checked: false }]);
    };

    const removeTask = taskId => {
        setTasks(tasks.filter(t => t.id !== taskId));
    };

    const taskChecked = (taskId, checked) => {
        setTasks(tasks.map(t => (t.id === taskId ? { ...t, checked: checked } : t)));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask, taskChecked }}>
            {props.children}
        </TasksContext.Provider>
    );
};

export const TasksConsumer = TasksContext.Consumer;
export default TasksContext;
