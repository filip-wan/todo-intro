import React from 'react';
import { ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import TasksContext from '../contexts/TasksContext';

function Tasks() {
    const { tasks, taskChecked, removeTask } = React.useContext(TasksContext);
    return (
        <ListGroup className="mb-3">
            {tasks.map(t => (
                <ListGroupItem key={t.id}>
                    <Form.Check.Input
                        inline="true"
                        checked={t.checked}
                        onChange={e => taskChecked(t.id, e.target.checked)}
                    />
                    {t.text}
                    <Button className="close" onClick={e => removeTask(t.id)}>
                        <span>X</span>
                    </Button>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default Tasks;
