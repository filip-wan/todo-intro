import React from 'react';
import { ListGroupItem, Form, Button } from 'react-bootstrap';
import TasksContext from '../contexts/TasksContext';

function Task(props) {
    const task = props.task;
    const { taskChecked, removeTask } = React.useContext(TasksContext);

    return (
        <ListGroupItem className="pl-5">
            <Form.Check.Input
                inline="true"
                checked={task.checked}
                onChange={e => taskChecked(task.id, e.target.checked)}
            />
            {task.checked ? <del>{task.text}</del> : task.text}
            <Button className="close" onClick={e => removeTask(task.id)}>
                <span>X</span>
            </Button>
        </ListGroupItem>
    );
}

export default Task;
