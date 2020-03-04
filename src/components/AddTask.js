import React, { useState } from 'react';
import TasksContext from '../contexts/TasksContext';
import { ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap';

function AddTask() {
    const { addTask } = React.useContext(TasksContext);
    const [task, setTask] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (task !== '') addTask(task);
        setTask('');
    };

    return (
        <ListGroup className="mt-3 mb-3">
            <ListGroupItem>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="New task"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                    <Button className="ml-3 btn-lg p-0 pr-2 pl-2" type="submit">
                        <i class="fas fa-plus"></i>
                    </Button>
                </Form>
            </ListGroupItem>
        </ListGroup>
    );
}

export default AddTask;
