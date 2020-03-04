import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TasksContext from '../contexts/TasksContext';
import Task from './Task';

function Tasks() {
    const { tasks } = React.useContext(TasksContext);
    return (
        <ListGroup className="mb-3">
            {tasks.map(t => (
                <Task key={t.id} task={t} />
            ))}
        </ListGroup>
    );
}

export default Tasks;
