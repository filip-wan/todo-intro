import React, { useState } from 'react';
import TasksContext from '../contexts/TasksContext';
import { ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap';

function AddTask() {
    const { addTask } = React.useContext(TasksContext);
    const [task, setTask] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (task === '') return;
        addTask(task);
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
                    <Button className="btn-lg ml-3 p-0" type="submit">
                        <i className="fas fa-plus mr-2 ml-2" />
                    </Button>
                </Form>
            </ListGroupItem>
        </ListGroup>
    );
}

export default AddTask;
